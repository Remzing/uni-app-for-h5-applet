var html2json = require('./parse/html2json')
var constant = require('./parse/constant/index')

var CHARS = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'nbsp': ' ',
    'quot': '"',
    'apos': "'"
}

function decodeEntities(htmlString) {
    return htmlString.replace(/&(([a-zA-Z]+)|(#x{0,1}[\da-zA-Z]+));/gi, function(match, stage) {
        if (CHARS[stage]) {
            return CHARS[stage]
        }
        if (/^#[0-9]{1,4}$/.test(stage)) {
            return String.fromCharCode(stage.slice(1))
        }
        if (/^#x[0-9a-f]{1,4}$/i.test(stage)) {
            return String.fromCharCode('0' + stage.slice(1))
        }
        return match
    })
}

Component({
    mixins: [],
    data: {
        htmlNodes: []
    },
    props: {
        nodes: ''
    },
    didMount() {
        this.updateHtmlNodes()
    },
    didUpdate(prevProps, prevData) {
        this.updateHtmlNodes()
    },
    didUnmount() {},
    methods: {
        updateHtmlNodes() {
            if (this.props.nodes && typeof this.props.nodes === 'string') {
                this.setData({
                    htmlNodes: this.htmlParse(this.props.nodes)
                })
            } else if (this.props.nodes.length) {
                this.setData({ //为保证格式正确，先格式化为 string，再解析一遍
                    htmlNodes: this.htmlParse(this.nodesParse(this.props.nodes))
                })
            }
        },
        htmlParse() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<div></div>'
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
            var transData = {} // 存放转化后的数据

            var res = {} // 返回的数据

            transData = html2json.html2json(data, 'root', options) // console.log('解析结果是', transData);

            res = transData
            return res
        },
        nodesParse(nodes) {
            var self = this;
            if (nodes && nodes.length) {
                return nodes.map(function(node) {
                    return self.nodeParse(node)
                }).join('')
            }
            return ''
        },
        nodeParse(node) {
            if (node.type === 'text') {
                return decodeEntities(node.text)
            }
            return '<' + node.name + this.attrParse(node.attrs) + '>' + this.nodesParse(node.children) + '</' +
                node.name + '>'
        },
        attrParse(attrs) {
            if (attrs) {
                return ' ' + Object.keys(attrs).map(function(key) {
                    return key + '=\'' + attrs[key].replace(/'/g, ' ') + '\''
                }).join(' ') + ' '
            }
            return ''
        }
    }
})
