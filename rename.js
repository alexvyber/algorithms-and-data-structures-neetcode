const { readdir, rename } = require("node:fs");

const dir =
"/mnt/FILER/algo-data-interview/neetcode - algorithms and data structures for beginners/02 arrays/05 STACKS"

const langMap = {
	"c++": "cpp",
	java: "java",
	javascript: "js",
	python: "py",
};

readdir(dir, (_err, files) => {
	files.filter(item => !item.includes("CHALLENGE")).forEach((file) => {
		const newName = file
			.toLowerCase()
			.replaceAll(" ", "-")
			.replace("-code.txt", "");
    console.log(file)
    const toRename = dir + "/" + `code.${langMap[newName]}`
    console.log(toRename)

    rename(dir + "/" + file, toRename, (err) => {})
	});
});
