<script>
	const experience = [
		{
			company: 'Akcelita',
			role: 'Software Engineer',
			years: '2024 to 2026',
			summary: 'Built a self-describing MCP server that lets AI agents create schemas, forms, and workflows on an enterprise automation platform.'
		},
		{
			company: 'Company Sage',
			role: 'Software Engineer',
			years: '2023 to 2024',
			summary: 'Migrated a business-formation platform from Django and Vue to Nest and Next while customers kept using it.'
		},
		{
			company: 'Optic Power (Snappt)',
			role: 'Software Engineer',
			years: '2019 to 2023',
			summary: 'Built fraud-detection features that grew from zero to 2,500 daily users.'
		}
	];
</script>

<svelte:head>
	<title>Profile · Christian Nogueras</title>
	<meta name="description" content="Profile and experience of Christian Nogueras.">
</svelte:head>

<header class="page-intro">
	<p class="eyebrow">Profile</p>
	<h1 class="page-title">Six years of shipping software.</h1>
	<p class="lede">I've shipped software for six years, from fraud detection at a startup to compliance platforms and enterprise workflow tools.</p>
</header>

<section class="section about-grid" aria-labelledby="experience-title">
	<img class="about-grid__image" src="/img/portrait.jpg" alt="Christian Nogueras" width="250" height="250">
	<div class="about-copy">
		<h2 class="section-heading" id="experience-title">Experience</h2>
		{#each experience as job}
			<p><strong>{job.company}</strong>, {job.role}, {job.years}. {job.summary}</p>
		{/each}
		<a class="kiri-btn kiri-btn--primario" href="/contact">Let's talk</a>
	</div>
</section>
