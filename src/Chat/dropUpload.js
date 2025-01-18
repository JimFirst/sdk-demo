export default function dropUpload(droptarget, modal) {
  // 文件流数组
  let fileBlodArr = []
  // 文件数组
  let fileArr = []
  const overlay = document.createElement('div')
  overlay.style.position = 'absolute'
  overlay.style.top = '0'
  overlay.style.left = '0'
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
  overlay.style.display = 'none'
  overlay.style.pointerEvents = 'none'
  droptarget.style.position = 'relative'
  droptarget.appendChild(overlay)
  async function handleEvent(event) {
    event.preventDefault()
    if (event.type === 'drop') {
      overlay.style.display = 'none'
      for (let file of event.dataTransfer.files) {
        console.log(file)
        // 把文件保存到文件数组中
        fileArr.push(file)
      }
      const confirmed = await modal.confirm({
        title: '确认上传吗？',
        content: '上传后不可恢复，请确认上传文件内容是否正确',
        onOk() {
          console.log('点击确定')
          // 上传文件到服务器
        },
      })
    } else if (event.type === 'dragleave') {
      if (!droptarget.contains(event.relatedTarget)) {
        overlay.style.display = 'none'
      }
    } else if (event.type === 'dragenter' || event.type === 'dragover') {
      overlay.style.display = 'block'
    }
  }
  // 拖拽事件绑定
  droptarget.addEventListener('dragenter', handleEvent)
  droptarget.addEventListener('dragover', handleEvent)
  droptarget.addEventListener('drop', handleEvent)
  droptarget.addEventListener('dragleave', handleEvent)
}
