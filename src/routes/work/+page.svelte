<script>
	import { loadProjects } from '$lib/projects.js';

	const projects = loadProjects();
</script>

<svelte:head>
	<title>Work · Christian Nogueras</title>
	<meta name="description" content="Selected projects by Christian Nogueras.">
</svelte:head>

<header class="page-intro">
	<p class="eyebrow">Work</p>
	<h1 class="page-title">Work that ships.</h1>
	<p class="lede">From AI agents on an enterprise platform to a design system with no build step. Each one starts with a problem and ends with the fix I built for it.</p>
</header>

<section class="section project-list" aria-label="Selected projects">
	{#each projects as project}
		<article class="project">
			{#if project.image}
				<img class="project__image" src={project.image} alt={project.imageAlt} width="780" height="470">
			{:else if project.slug === 'kiri-design'}
				<div class="project__visual" aria-hidden="true" inert>
					<ul class="project__swatches">
						<li style="background: var(--kiri-marca)"></li>
						<li style="background: var(--kiri-bien)"></li>
						<li style="background: var(--kiri-mal)"></li>
						<li style="background: var(--kiri-ojo)"></li>
						<li style="background: var(--kiri-tinta-suave)"></li>
					</ul>
					<button class="kiri-btn kiri-btn--primario" type="button">kiri-btn--primario</button>
				</div>
			{:else if project.problem.length > 0}
				<div class="project__visual project__visual--problem">
					<p class="eyebrow">The problem</p>
					<blockquote class="project__problem">{project.problem.join(' ')}</blockquote>
				</div>
			{/if}
			<div class="project__meta">
				<div class="project__headline">
					<h2>{project.name}</h2>
					<ul class="project__tags">
						{#each project.stack as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
				<p class="project__description">{project.oneliner}</p>
				{#if project.image || project.slug === 'kiri-design'}
					{#each project.problem as paragraph}
						<p class="project__description">{paragraph}</p>
					{/each}
				{/if}
				{#each project.built as paragraph}
					<p class="project__description">{paragraph}</p>
				{/each}
				{#if project.hardPart.length > 0}
					<p class="project__description"><strong>The hard part.</strong> {project.hardPart.join(' ')}</p>
				{/if}
				<div class="project__links">
					{#each project.links as link}
						<a class="kiri-btn kiri-btn--primario" href={link.url} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
					{/each}
					{#if project.code && project.code !== 'private'}
						<a class="kiri-btn kiri-btn--texto" href={project.code} target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>
					{/if}
				</div>
				{#if project.note}
					<p class="project__description"><small>{project.note}</small></p>
				{/if}
			</div>
		</article>
	{/each}
</section>
