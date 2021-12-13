let index = 0;
const $cover = query(`.login__image`);
const _cover_prefix = `https://cdn.dribbble.com/users`;
const _cover_list_ = [
	`https://cdn3d.iconscout.com/3d/premium/thumb/man-holding-sign-up-form-2937684-2426382.png`,
	`https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1637695724/Algolia_com_Blog_assets/Featured_images/ux/mobile-search-ux-best-practices/oqgdcnkve8b3cliih28o.png`,
	`${_cover_prefix}/1418040/screenshots/14693486/media/549779d5e92556cf1accf6b51ad819b0.png?compress=1&resize=1200x900`,
	`${_cover_prefix}/1418040/screenshots/16577362/media/18b108718eab70f1b140549c6c37a097.png?compress=1&resize=1200x900`,
	`${_cover_prefix}/1418040/screenshots/16577362/media/51c6907dce168c7be49be1d733c503ac.png?compress=1&resize=800x600`,
	`${_cover_prefix}/6051/screenshots/13935178/media/ee9d904fabedf348bc462634374008d9.png?compress=1&resize=800x600`,
	`${_cover_prefix}/6051/screenshots/15690661/media/452c0b60b4a6d78071b80b530badcda5.png?compress=1&resize=1200x900`,
	`${_cover_prefix}/6051/screenshots/14089340/media/1fdbfdaf6d1dc5d9dda26c56c77051ab.png?compress=1&resize=1200x900`,
	`${_cover_prefix}/6051/screenshots/7779269/media/3e92a3efe674d3348c7ddc8b76fca084.png?compress=1&resize=1200x900`,
];
$cover.onclick = function () {
	$cover.setAttribute(`src`, `${_cover_list_[index]}`);
	index +=
		index >= _cover_list_.length ? -(parseInt(_cover_list_.length) + 1) : 1;
};

// const random_index = (() => Math.floor(Math.random() * 3))();
// $cover.setAttribute(`title`, random_index);
/* $cover.setAttribute(
    `src`,
    `${_cover_list_[random_index]}`
  ); */

const $field = query(`.loign__field--password`);
const $input = query(`.login__field--password input`);
const $trailing = query(`.login__trailing`);

listener($trailing, 'click', () => {
	// $field.classList.add(`.login__field--toggle`);
	$input.setAttribute(
		`type`,
		$input.getAttribute(`type`) == `password` ? `input` : `password`,
	);
	/* window.setTimeout(
    () => $field.classList.toggle(`.login__field--toggle`),
    5000
  ); */
	// 5s is css keyframes animation
});
