import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
const html=await readFile(new URL("../index.html",import.meta.url),"utf8");
const app=await readFile(new URL("../app.js",import.meta.url),"utf8");
const css=await readFile(new URL("../styles.css",import.meta.url),"utf8");
test("JT Cloud has a project navigation rail and dedicated file manager surface",()=>{
 for(const id of ["projectNav","projectList","search","filter","exportCurrent","projectSelect","files"])assert.match(html,new RegExp('id="'+id+'"'));
 assert.match(html,/PROJECT SPACES/);
 assert.match(html,/LOCAL VAULT/);
 assert.match(html,/metadata only/i);
});
test("JT Cloud renders selectable project spaces and file rows with local open/remove actions",()=>{
 assert.match(app,/data-project=/);
 assert.match(app,/project-nav-item/);
 assert.match(app,/file-table/);
 assert.match(app,/data-open=/);
 assert.match(app,/data-remove-file=/);
 assert.match(app,/selectedProjectId/);
});
test("JT Cloud preserves the no-upload disclosure and responsive file-manager styling",()=>{
 assert.match(html,/does not sync or upload file contents/);
 assert.match(css,/\.file-workspace/);
 assert.match(css,/\.vault-sidebar/);
 assert.match(css,/\.file-table/);
 assert.match(css,/@media\(max-width:680px\)/);
});
