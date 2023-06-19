const newHeads = {
    "mangrovedao/mangrove-core": "54e54fe92e63c10afba0e058f1e51711fa6f512d",
    "mangrovedao/mangrove.js": "ba67f9aedef250d4561ebf7eeec8d81883f2b269"
}


/* c.f. @vegaprotocol/docusaurus-theme-github-codeblock/build/theme/ReferenceCodeBlock/index.js
/**
 * parses GitHub reference
 * @param {string} ref url to github file
 */
function parseReference(ref) {
    const fullUrl = ref;//ref.slice(ref.indexOf('https'), -1);
    const [url, loc] = fullUrl.split('#');
    /**
     * webpack causes failures when it tries to render this page
     */
    const global = globalThis || {};
    if (!global.URL) {
        // @ts-ignore
        global.URL = URL;
    }
    const [org, repo, blob, branch, ...pathSeg] = new global.URL(url).pathname.split('/').slice(1);
    const [fromLine, toLine] = loc
        ? loc.split('-').map((lineNr) => parseInt(lineNr.slice(1), 10) - 1)
        : [0, Infinity];
    return {
        url: `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${pathSeg.join('/')}`,
        fromLine,
        toLine,
        org,
        repo,
        branch,
        ref,
        title: pathSeg.join('/')
    };
}

async function fetchCode({ url, fromLine, toLine }) {
    const res = await fetch(url);
    
    return (await res.text()).split('\n').slice(fromLine, (toLine || fromLine) + 1);
}

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Find all markdown files in the "docs" folder
const docsPath = "./docs";
const markdownFiles = [];
const search = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      search(filePath);
    } else if (filePath.endsWith('.md')) {
      markdownFiles.push(filePath);
    }
  });
};
search(docsPath);

const links = [];

markdownFiles.forEach(file => {
  const filePath = file;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const regexp = /((https?:\/\/)?(www\.)?github\.com(\/[^\s\)]+))(\)?|(\s|$))/g;
  let match;
  while ((match = regexp.exec(fileContent)) !== null) {
    links.push({
      link: match[1],
      file: file
    });
  }
});

async function compareAll() {
    for (i = 0; i < links.length; i++) {
        const lf = links[i];

        const ref = parseReference(lf.link);
        const newHead = newHeads[ref.org+"/"+ref.repo];
        if (ref.toLine == Infinity) {
            // entire file
            if (ref.branch && newHead && newHead != ref.branch && ref.branch.length > 6) {
                console.log(`SAFE: ${ref.branch} -> ${newHead}`);
            }
        } else {
            if (newHead) {
                const newUrl = ref.url.replace(ref.branch, newHead);
                if (newUrl != ref.url) {

                    const oldCode = await fetchCode(ref);
                    const newCode = await fetchCode({ url: newUrl, fromLine: ref.fromLine, toLine: ref.toLine});

                    if (oldCode.join("\n") != newCode.join("\n")) {
                        console.log("WARN!");
                        console.log(ref.ref);
                        console.log(ref.ref.replace(ref.branch, newHead));
                    } else
                    {
                        console.log(`SAFE: ${ref.branch} -> ${newHead}`);
                    }
            }

            } else {
            // console.log(ref.repo);
            }
        //  console.log(ref.branch, ref.url);
        }
    }
}

compareAll().then(() => {console.log("DONE");});
