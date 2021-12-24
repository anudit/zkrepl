import{l as f,R as A,w as R,a as e,e as L,K as E,b as w,_ as $,c as P}from"./vendor.2e1db552.js";const T=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function m(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=m(r);fetch(r.href,t)}};T();f.register({id:"circom"});let x=d=>{};f.registerHoverProvider("circom",{provideHover:async function(d,o){if(N.running)return null;const m=d.getLineContent(o.lineNumber),l=/([a-z$_][a-z0-9$_]*)(\.[a-z$_][a-z0-9$_]*)*(\[\d+\])?/g,r=o.column;let t;if(t=/(include\s+)"([^"]+)"/g.exec(m),t){let i=[];return t[2].startsWith("circomlib/")?i.push({value:`[View Source](https://github.com/iden3/circomlib/blob/master/circuits/${t[2].replace("circomlib/","")})`}):t[2].startsWith("gist:")&&i.push({value:`[View Source](https://gist.github.com/${t[2].replace("gist:","")})`}),{range:new A(o.lineNumber,1+t.index+t[1].length,o.lineNumber,1+t.index+t[0].length),contents:i}}for(;(t=l.exec(m))&&!(t.index>r);){if(t.index+t[0].length<r)continue;const i=t[0],s=await new Promise(v=>{x=k=>{v(k.text),x=()=>{}},N.postMessage({type:"hover",symbol:i})});return{range:new A(o.lineNumber,1+t.index,o.lineNumber,1+t.index+t[0].length),contents:[{value:s}]}}return null}});f.setLanguageConfiguration("circom",{wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:f.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:f.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:f.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:f.IndentAction.None,removeText:1}}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]},{open:"`",close:"`",notIn:["string","comment"]},{open:"/**",close:" */",notIn:["string"]}],folding:{markers:{start:new RegExp("^\\s*//\\s*#?region\\b"),end:new RegExp("^\\s*//\\s*#?endregion\\b")}}});f.setMonarchTokensProvider("circom",{keywords:["signal","input","output","public","template","component","var","function","return","if","else","for","while","do","log","assert","include","pragma"],typeKeywords:["input","output","public"],operators:["!","~","-","||","&&","==","!=","<",">","<=",">=","|","&","<<",">>","+","-","*","/","\\","%","**","^","=","<--","<=="],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],[/[A-Z][\w\$]*/,"type.identifier"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}],[/'[^\\']'/,"string"],[/(')(@escapes)(')/,["string","string.escape","string"]],[/'/,"string.invalid"]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}});var I=`pragma circom 2.0.1;

include "circomlib/poseidon.circom";

template Example () {
    signal input a;
    signal input b;
    signal output c;
    
    c <== a * b;

    assert(a > 2);
    
    component hash = Poseidon(2);
    hash.inputs[0] <== a;
    hash.inputs[1] <== b;

    log(hash.out);
}

component main { public [ a ] } = Example();

/* INPUT = {
    "a": "5",
    "b": "77"
} */`;function z(){return new Worker("worker.627e40b3.js",{type:"module"})}var G="circomlib.acbc52cb.zip";console.log(G,R);var N;function M(){const[d,o]=e.useState(!1),[m,l]=e.useState([]),[r,t]=e.useState(null),i=e.useRef(null),s=e.useRef(null),[v,k]=e.useState(1),b=new URLSearchParams(location.search).get("gist");return e.useEffect(()=>{if(i&&!r){const c=new URLSearchParams(location.search).get("code");c&&(history.replaceState(null,"","/"),fetch("https://kikks470wl.execute-api.us-west-1.amazonaws.com/access_token?code="+c,{method:"POST"}).then(n=>n.formData()).then(n=>{n.get("access_token")?(localStorage.GithubAccessToken=n.get("access_token"),u.getModel().setValue(localStorage.GithubNavigationCodeSnapshot),y()):alert("Failed to get access token")})),b&&fetch("https://api.github.com/gists/"+b).then(n=>n.json()).then(n=>{var a,p;u.getModel().setValue(((p=(a=n==null?void 0:n.files)==null?void 0:a["main.circom"])==null?void 0:p.content)||"// Unable to load gist"),g()});const u=L.create(i.current,{value:b?"// Loading from Github...":I,language:"circom",theme:"vs",automaticLayout:!0,hover:{enabled:!0}}),g=()=>{(!s.current||s.current.running)&&(s.current&&(s.current.terminate(),s.current=null),s.current=new z,N=s.current,s.current.onmessage=n=>{const a=n.data;if(a.type==="fail")o(!1),s.current.running=!1;else if(a.type==="done")o(!1),s.current.running=!1;else if(a.type==="keys")o(!1),s.current.running=!1;else{if(a.type==="hover")return x(a);if(a.type==="debug")console.log(a.text);else if(a.type==="progress"){k(a.fraction);return}}l(p=>[...p,a])},s.current.onerror=n=>{console.error(n),l(a=>[...a,{type:"error",text:n.message}])}),s.current.running=!0,o(Math.random()+1),l([]),s.current.postMessage({type:"run",code:u.getValue()})},y=()=>{const n=new URLSearchParams(location.search).get("gist"),a=()=>{localStorage.GithubNavigationCodeSnapshot=u.getValue(),location.href="https://github.com/login/oauth/authorize?client_id=85123c5a3a8a8f73f015&scope=gist"},p=u.getValue();if(history.state===p)console.log("Already saved!");else if(localStorage.GithubAccessToken){o(Math.random()+1);const S={"main.circom":{content:p}};n&&(S["about_zkrepl.md"]={content:`Open this in [zkREPL \u2192](https://zkrepl.dev/?gist=${n})

This file can be included into other zkREPLs with \`\`\`include "gist:`+n+'";```'}),fetch(n?"https://api.github.com/gists/"+n:"https://api.github.com/gists",{method:"POST",body:JSON.stringify({files:S}),headers:{Authorization:"token "+localStorage.GithubAccessToken}}).then(h=>h.json()).then(h=>{h.id?(history.replaceState(p,"","/?gist="+h.id),l(C=>[...C,{type:"save",url:`https://gist.github.com/${h.id}`,text:"Saved to Github"}])):h.message==="Bad credentials"?a():h.message==="Not Found"&&n&&(history.replaceState(null,"","/"),y()),o(!1)})}else a()};u.addCommand(E.CtrlCmd|w.KeyS,y),u.addCommand(E.CtrlCmd|w.Enter,g),u.addCommand(E.Shift|w.Enter,g),u.addCommand(E.CtrlCmd|w.Period,function(){console.log("Abort kernel!"),o(!1),l(n=>[...n,{type:"abort",text:"Execution manually interrupted"}]),s.current&&(s.current.terminate(),s.current=null)}),b||g(),t(u)}return()=>r==null?void 0:r.dispose()},[i.current]),e.createElement("div",{className:"layout"},e.createElement("div",{className:"editor",ref:i}),e.createElement("div",{className:"sidebar"},e.createElement("div",{className:"output"},e.createElement("div",{className:"heading"},e.createElement("div",{className:"description"},e.createElement("b",null,"Shift-Enter")," to run ",e.createElement("br",null),e.createElement("b",null,"Cmd-S")," to save as"," ",b?e.createElement("a",{href:`https://gist.github.com/${b}`,target:"_blank"},"Github Gist"):"Github Gist"),e.createElement("img",{className:"logo",src:new URL("logo.effa8f98.png",self.location).toString(),alt:"zkrepl"})),e.createElement("br",null),m.map((c,u)=>e.createElement("div",{key:u,className:"message"},e.createElement("div",{className:"label"},c.type,": "),c.url?e.createElement("a",{href:c.url},e.createElement($,null,c.text)):e.createElement($,null,c.text),c.files&&e.createElement("div",{className:"files"},Object.entries(c.files).map(([g,y])=>e.createElement("li",{key:g},e.createElement("a",{href:URL.createObjectURL(new Blob([y],{type:"application/octet-stream"})),download:g},g)," ","(",(y.length/1e3).toFixed(2),"KB)"))))),m.some(c=>c.type==="done")&&!m.some(c=>c.type==="keys")&&s.current&&e.createElement("div",{className:"phase2"},e.createElement("button",{onClick:()=>{s.current.postMessage({type:"phase2"}),o(Math.random())}},"Generate Prove/Verify Keys")),v!==1&&e.createElement("div",{className:"progress-container"},e.createElement("progress",{value:v})),d?e.createElement(O,{key:d}):null)))}function O(){const[d,o]=e.useState(0);return e.useEffect(()=>{const m=Date.now(),l=setInterval(()=>{o(Date.now()-m)},16);return()=>clearInterval(l)},[]),e.createElement("div",{className:"loading"},e.createElement("div",{className:"lds-ellipsis"},e.createElement("div",null),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)),d>200&&e.createElement("div",{className:"time"},(d/1e3).toFixed(2),"s"))}P.createRoot(document.getElementById("root")).render(e.createElement(M,null));