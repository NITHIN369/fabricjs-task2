const canvas=new fabric.Canvas("canvas1",{
    width:2100,
    height:930,
})
fabric.Image.fromURL("https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",(img)=>{
    canvas.backgroundImage=img
    canvas.requestRenderAll()
})
const intialplace=canvas.getZoom()
canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
})