import { parse } from 'yaml';

const files = import.meta.glob('/docs/projects/*.md', { query: '?raw', import: 'default', eager: true });

function splitFrontmatter(text) {
	const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) {
		throw new Error('Project file without frontmatter');
	}
	return { data: parse(match[1]), body: match[2] };
}

function readSections(body) {
	const sections = {};
	const parts = body.split(/^## /m);
	for (const part of parts) {
		const lines = part.split('\n');
		const heading = lines[0].trim();
		const text = lines.slice(1).join('\n').trim();
		if (heading && text) {
			sections[heading] = text.split(/\n\s*\n/);
		}
	}
	return sections;
}

function slugFromPath(path) {
	const fileName = path.split('/').pop();
	return fileName.replace(/\.md$/, '');
}

export function loadProjects() {
	const projects = [];
	for (const [path, text] of Object.entries(files)) {
		const { data, body } = splitFrontmatter(text);
		const sections = readSections(body);
		projects.push({
			slug: slugFromPath(path),
			name: data.name,
			order: data.order,
			oneliner: data.oneliner,
			stack: data.stack ?? [],
			code: data.code,
			links: data.links ?? [],
			note: data.note,
			image: data.image,
			imageAlt: data.image_alt,
			problem: sections['Problem'] ?? [],
			built: sections['What I built'] ?? [],
			hardPart: sections['The hard part'] ?? []
		});
	}
	projects.sort((a, b) => a.order - b.order);
	return projects;
}
