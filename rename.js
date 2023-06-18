const { readdir, rename } = require("node:fs");

const dir =
  "/mnt/FILER/_doing/neetcode-algorithms-and-data-structures-for-beginners/03 linked lists/08 queues"
// "/mnt/FILER/_doing/neetcode-algorithms-and-data-structures-for-beginners/03 linked lists/07 doubly linked lists"
// "/mnt/FILER/algo-data-interview/neetcode - algorithms and data structures for beginners/02 arrays/05 STACKS"
// "/mnt/FILER/_doing/neetcode-algorithms-and-data-structures-for-beginners/03 linked lists/06 singly linked lists"

const langMap = {
	"c++": "cpp",
	java: "java",
	javascript: "js",
	python: "py",
};

readdir(dir, (_err, files) => {
	files.filter(item => !item.toLowerCase().includes("CHALLENGE".toLowerCase())).forEach((file) => {
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
