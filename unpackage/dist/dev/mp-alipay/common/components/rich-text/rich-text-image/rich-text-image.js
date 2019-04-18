var windowWidth = my.getSystemInfoSync().windowWidth-20;
Component({
  mixins: [],
  data: {
    newStyleStr:''
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onImgLoad(e){
      var width = e.detail.width;
      var height = e.detail.height;
      if(width>windowWidth){
        height = windowWidth * (height / width)
        width = windowWidth
      }
      this.setData({
        newStyleStr:(this.props.item.styleStr||'')+(';height:'+height+'px;width:'+width+'px;')
      })
    }
  }
});
