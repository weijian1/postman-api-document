import Clipboard from 'clipboard'

export default {
	copyText(text = '') {
		let vm = document.getElementById("app").__vue__;

		vm.$copyText(text).then((e) => {
			vm.$message({
			  showClose: true,
			  message: '复制成功',
			  type: 'success'
			});
		}, (e) => {
			vm.$message({
			  showClose: true,
			  message: '由于浏览器限制，请手动复制',
			  type: 'error'
			});
		});
	}
}