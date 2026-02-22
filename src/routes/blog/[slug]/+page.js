export const prerender = true;

export function load({ params, url }) {
	const tab = url.searchParams.get("tab") || "all";
	const tag = url.searchParams.get("tag");
	const page = +(url.searchParams.get("page") ?? "1");
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`,
		},
	};
}
