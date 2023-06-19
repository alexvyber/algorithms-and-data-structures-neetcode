const { readdir, rename } = require("node:fs");

const dir =
	"/mnt/FILER/_doing/neetcode-algorithms-and-data-structures-for-beginners/04 recursion/10 fibonacci";

const langMap = {
	"c++": "cpp",
	java: "java",
	javascript: "js",
	python: "py",
};

readdir(dir, (_err, files) => {
	files
		.filter((item) => !item.toLowerCase().includes("CHALLENGE".toLowerCase()))
		.forEach((file) => {
			const newName = file
				.toLowerCase()
				.replaceAll(" ", "-")
				.replace("-code.txt", "");
			console.log(file);
			const toRename = dir + "/" + `code.${langMap[newName]}`;
			console.log(toRename);

			rename(dir + "/" + file, toRename, (err) => {});
		});
});
