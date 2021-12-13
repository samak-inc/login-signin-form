"use strict";

(function () {
	const $checkbox = query(`#samak-side-controller`);
	const $cover = query(`.samak__cover`).firstElementChild;
	const field_password = {
		login: query(`.login__field--password`),
		signin: query(`.signin__field--password`),
	};
	const $login_trailing = field_password.login.lastElementChild;
	const $signin_trailing = field_password.signin.lastElementChild;

	listener($login_trailing, "click", () =>
		_trailing_(field_password.login.lastElementChild)
	);
	listener($signin_trailing, "click", () =>
		_trailing_(field_password.signin.lastElementChild)
	);
	listener($checkbox, "change", () => {
		let isUserExist = $checkbox.checked;
		$cover.src = isUserExist
			? // show login cover
			  `https://i.pinimg.com/564x/c3/34/e3/c334e3014be8b52e0845b57a304a85f9.jpg`
			: // show sign-in cover
			  `https://i.pinimg.com/564x/6b/ee/21/6bee21249cd5ef1f48623c4c14630267.jpg`;
	});
})();

function _trailing_($target) {
	let $input = $target.firstElementChild;
	let $icon = $target.lastElementChild.firstElementChild;
	$icon.classList.toggle(`fa-eye`);
	$icon.classList.toggle(`fa-eye-slash`);
	$input.setAttribute(
		`type`,
		$input.getAttribute(`type`) == `password` ? `input` : `password`
	);
}
