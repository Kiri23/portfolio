<script>
	import { page } from '$app/state';
	import '$lib/portfolio.css';
	import mainScript from '$lib/main.js?url';

	let { children } = $props();

	const links = [
		{ href: '/', label: 'Home', icon: '○', currentIcon: '●' },
		{ href: '/about', label: 'Profile', icon: '○', currentIcon: '●' },
		{ href: '/work', label: 'Work', icon: '□', currentIcon: '■' },
		{ href: '/contact', label: 'Contact', icon: '↗', currentIcon: '↗' }
	];

	function isCurrent(href) {
		return page.url.pathname === href;
	}
</script>

<svelte:head>
	<script src={mainScript} defer></script>
</svelte:head>

<header class="site-header">
	<div class="site-header__inner">
		<a class="brand" href="/" aria-label="Christian Nogueras, home">
			<span class="kiri-marca-punto" aria-hidden="true"></span>
			Christian Nogueras
		</a>
		<nav class="desktop-nav" aria-label="Main navigation">
			{#each links as link}
				<a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
			{/each}
		</nav>
		<button class="kiri-btn kiri-btn--texto theme-toggle" type="button" data-theme-toggle>Light</button>
	</div>
</header>

<main class="page-shell">
	{@render children()}
</main>

<footer class="site-footer">
	<span>Christian Nogueras · <span data-current-year></span></span>
	<span>Puerto Rico</span>
</footer>

<nav class="kiri-nav mobile-nav" aria-label="Mobile navigation">
	{#each links as link}
		<a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>
			<span class="icono" aria-hidden="true">{isCurrent(link.href) ? link.currentIcon : link.icon}</span>{link.label}
		</a>
	{/each}
</nav>
