function blockon() {
	function b1() {
		block_1.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b1, 1000);

	function b2() {
		block_2.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b2, 3000);

	function b3() {
		block_3.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b3, 5000);

	function b4() {
		block_4.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b4, 7000);

	function b5() {
		block_5.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b5, 9000);

	function b6() {
		block_6.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b6, 11000);

	function b7() {
		block_7.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b7, 13000);

	function b8() {
		block_8.style.animation = "block 2s linear 1 normal running 0s";
	}
	setTimeout(b8, 15000);
}
setTimeout(blockon, 1000);
setInterval(blockon, 17001);

function blockoff() {
	function b1() {
		block_1.style.animation = "";
		block_2.style.animation = "";
		block_3.style.animation = "";
		block_4.style.animation = "";
		block_5.style.animation = "";
		block_6.style.animation = "";
		block_7.style.animation = "";
		block_8.style.animation = "";
	}
	setTimeout(b1, 0);
}
setTimeout(blockoff, 17000);
setInterval(blockoff, 17002);
