<script>
	const links = [
		{ label: 'Email', text: 'christian_nogueras94@hotmail.com', href: 'mailto:christian_nogueras94@hotmail.com', external: false },
		{ label: 'Resume', text: 'kiri231.com/resume.pdf', href: '/resume.pdf', external: true },
		{ label: 'GitHub', text: 'github.com/Kiri23', href: 'https://github.com/Kiri23', external: true },
		{ label: 'LinkedIn', text: 'linkedin.com/in/christian-nogueras', href: 'https://www.linkedin.com/in/christian-nogueras', external: true }
	];
</script>

<svelte:head>
	<title>Contact · Christian Nogueras</title>
	<meta name="description" content="How to reach Christian Nogueras.">
</svelte:head>

<header class="page-intro">
	<p class="eyebrow">Contact</p>
	<h1 class="page-title">Let's talk.</h1>
	<p class="lede">Open to full-time roles and select contract work.</p>
</header>

<section class="section contact-layout" aria-labelledby="contact-title">
	<div>
		<h2 class="section-heading" id="contact-title">Get in touch</h2>
		<p class="contact-note">Email me or download my resume.</p>
		<div class="project__links">
			<a class="kiri-btn kiri-btn--primario" href="mailto:christian_nogueras94@hotmail.com">Email me</a>
			<a class="kiri-btn kiri-btn--texto" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
		</div>
	</div>
	<div class="contact-list">
		{#each links as link}
			<a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
				<span><small>{link.label}</small>{link.text}</span>
				<span class="arrow" aria-hidden="true">↗</span>
			</a>
		{/each}
	</div>
</section>
