import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from "./components/Result";

function App() {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value);
  }, []);

  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;

  return (
    <div>
      {/* Navbar  */}
      <Navbar />

      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Html Editor */}
          <div className=" p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-black">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="light"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div className="p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-black">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="light"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div className=" p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-black">
              JavaScript
            </h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="light"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default App;
