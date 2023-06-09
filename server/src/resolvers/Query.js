async function feed(parent, args, context, info) {
	const where = args.filter
		? {
				OR: [{ description: { contains: args.filter } }, { url: { contains: args.filter } }],
		  }
		: {};

	const links = await context.prisma.link.findMany({
		where,
		skip: args.skip,
		take: args.take,
		orderBy: args.orderBy,
	});

	const count = await context.prisma.link.count({ where });

	return {
		id: "main-feed",
		links,
		count,
	};
}

async function link(_, args, context) {
	const id = args.id;

	try {
		const link = await context.prisma.link.findUnique({
			where: { id: id },
		});

		return link;
	} catch (e) {
		throw e;
	}
}

module.exports = {
	feed,
	link,
};
