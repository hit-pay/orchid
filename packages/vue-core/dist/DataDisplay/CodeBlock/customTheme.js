const e = {
  name: "Custom Theme",
  base: "custom-theme",
  colors: {
    focusBorder: "#00000000",
    foreground: "#393a34",
    descriptionForeground: "#393a3490",
    errorForeground: "#ab5959",
    "textLink.foreground": "#1c6b48",
    "textLink.activeForeground": "#1c6b48",
    "textBlockQuote.background": "transparent",
    "textBlockQuote.border": "#f0f0f0",
    "textCodeBlock.background": "transparent",
    "textPreformat.foreground": "#586069",
    "textSeparator.foreground": "#d1d5da",
    "button.background": "#1c6b48",
    "button.foreground": "transparent",
    "button.hoverBackground": "#1c6b48",
    "checkbox.background": "#f7f7f7",
    "checkbox.border": "#d1d5da",
    "dropdown.background": "transparent",
    "dropdown.border": "#f0f0f0",
    "dropdown.foreground": "#393a34",
    "dropdown.listBackground": "#f7f7f7",
    "input.background": "#f7f7f7",
    "input.border": "#f0f0f0",
    "input.foreground": "#393a34",
    "input.placeholderForeground": "#393a3490",
    "inputOption.activeBackground": "#393a3450",
    "badge.foreground": "transparent",
    "badge.background": "#393a3490",
    "progressBar.background": "#1c6b48",
    "titleBar.activeForeground": "#4e4f47",
    "titleBar.activeBackground": "transparent",
    "titleBar.inactiveForeground": "#6a737d",
    "titleBar.inactiveBackground": "transparent",
    "titleBar.border": "#f7f7f7",
    "activityBar.foreground": "#393a34",
    "activityBar.inactiveForeground": "#393a3450",
    "activityBar.background": "transparent",
    "activityBarBadge.foreground": "transparent",
    "activityBarBadge.background": "#4e4f47",
    "activityBar.activeBorder": "#1c6b48",
    "activityBar.border": "#f0f0f0",
    "sideBar.foreground": "#4e4f47",
    "sideBar.background": "transparent",
    "sideBar.border": "#f0f0f0",
    "sideBarTitle.foreground": "#393a34",
    "sideBarSectionHeader.foreground": "#393a34",
    "sideBarSectionHeader.background": "transparent",
    "sideBarSectionHeader.border": "#f0f0f0",
    "list.hoverForeground": "#393a34",
    "list.inactiveSelectionForeground": "#393a34",
    "list.activeSelectionForeground": "#393a34",
    "list.hoverBackground": "#f7f7f7",
    "list.inactiveSelectionBackground": "#f7f7f7",
    "list.activeSelectionBackground": "#f7f7f7",
    "list.inactiveFocusBackground": "transparent",
    "list.focusBackground": "#f7f7f7",
    "list.highlightForeground": "#1c6b48",
    "tree.indentGuidesStroke": "#e1e4e8",
    "notificationCenterHeader.foreground": "#6a737d",
    "notificationCenterHeader.background": "transparent",
    "notifications.foreground": "#393a34",
    "notifications.background": "transparent",
    "notifications.border": "#f0f0f0",
    "notificationsErrorIcon.foreground": "#ab5959",
    "notificationsWarningIcon.foreground": "#a65e2b",
    "notificationsInfoIcon.foreground": "#296aa3",
    "pickerGroup.border": "#f0f0f0",
    "pickerGroup.foreground": "#393a34",
    "quickInput.background": "transparent",
    "quickInput.foreground": "#393a34",
    "quickInputList.focusBackground": "#f7f7f7",
    "statusBar.foreground": "#4e4f47",
    "statusBar.background": "transparent",
    "statusBar.border": "#f0f0f0",
    "statusBar.noFolderBackground": "transparent",
    "statusBar.debuggingBackground": "#f7f7f7",
    "statusBar.debuggingForeground": "#4e4f47",
    "statusBarItem.prominentBackground": "#f7f7f7",
    "editorGroupHeader.tabsBackground": "transparent",
    "editorGroupHeader.tabsBorder": "#f0f0f0",
    "editorGroup.border": "#f0f0f0",
    "tab.activeForeground": "#393a34",
    "tab.inactiveForeground": "#6a737d",
    "tab.inactiveBackground": "transparent",
    "tab.activeBackground": "transparent",
    "tab.hoverBackground": "#f7f7f7",
    "tab.unfocusedHoverBackground": "transparent",
    "tab.border": "#f0f0f0",
    "tab.unfocusedActiveBorderTop": "#f0f0f0",
    "tab.activeBorder": "#f0f0f0",
    "tab.unfocusedActiveBorder": "#f0f0f0",
    "tab.activeBorderTop": "#393a3490",
    "breadcrumb.foreground": "#6a737d",
    "breadcrumb.focusForeground": "#393a34",
    "breadcrumb.background": "#f7f7f7",
    "breadcrumb.activeSelectionForeground": "#22222215",
    "breadcrumbPicker.background": "transparent",
    "editor.foreground": "#ab5e3f",
    "editor.background": "transparent",
    "editorWidget.background": "transparent",
    "editor.foldBackground": "#22222210",
    "editor.lineHighlightBackground": "#f7f7f7",
    "editorLineNumber.foreground": "#393a3450",
    "editorLineNumber.activeForeground": "#4e4f47",
    "editorIndentGuide.background": "#00000015",
    "editorIndentGuide.activeBackground": "#00000030",
    "editorWhitespace.foreground": "#00000015",
    "editor.findMatchBackground": "#e6cc7744",
    "editor.findMatchHighlightBackground": "#e6cc7766",
    "editor.inactiveSelectionBackground": "#22222208",
    "editor.selectionBackground": "#22222215",
    "editor.selectionHighlightBackground": "#22222208",
    "editor.wordHighlightBackground": "#1c6b4805",
    "editor.wordHighlightStrongBackground": "#1c6b4810",
    "editorBracketMatch.background": "#1c6b4820",
    "diffEditor.insertedTextBackground": "#1c6b4815",
    "diffEditor.removedTextBackground": "#ab595910",
    "scrollbar.shadow": "#6a737d33",
    "scrollbarSlider.background": "#393a3410",
    "scrollbarSlider.hoverBackground": "#393a3450",
    "scrollbarSlider.activeBackground": "#393a3450",
    "editorOverviewRuler.border": "#fff",
    "panel.background": "transparent",
    "panel.border": "#f0f0f0",
    "panelTitle.activeBorder": "#1c6b48",
    "panelTitle.activeForeground": "#393a34",
    "panelTitle.inactiveForeground": "#6a737d",
    "panelInput.border": "#e1e4e8",
    "terminal.foreground": "#393a34",
    "terminal.selectionBackground": "#22222215",
    "terminal.ansiBrightBlack": "#aaaaaa",
    "terminal.ansiBrightBlue": "#296aa3",
    "terminal.ansiBrightCyan": "#2993a3",
    "terminal.ansiBrightGreen": "#1e754f",
    "terminal.ansiBrightMagenta": "#a13865",
    "terminal.ansiBrightRed": "#ab5959",
    "terminal.ansiBrightWhite": "#dddddd",
    "terminal.ansiBrightYellow": "#bda437",
    "terminal.ansiBlack": "#121212",
    "terminal.ansiBlue": "#296aa3",
    "terminal.ansiCyan": "#2993a3",
    "terminal.ansiGreen": "#1e754f",
    "terminal.ansiMagenta": "#a13865",
    "terminal.ansiRed": "#ab5959",
    "terminal.ansiWhite": "#dbd7caee",
    "terminal.ansiYellow": "#bda437",
    "gitDecoration.addedResourceForeground": "#1e754f",
    "gitDecoration.modifiedResourceForeground": "#296aa3",
    "gitDecoration.deletedResourceForeground": "#ab5959",
    "gitDecoration.untrackedResourceForeground": "#2993a3",
    "gitDecoration.ignoredResourceForeground": "#393a3450",
    "gitDecoration.conflictingResourceForeground": "#a65e2b",
    "gitDecoration.submoduleResourceForeground": "#393a3490",
    "editorGutter.modifiedBackground": "#296aa3",
    "editorGutter.addedBackground": "#1e754f",
    "editorGutter.deletedBackground": "#ab5959",
    "editorBracketHighlight.foreground1": "#2993a3",
    "editorBracketHighlight.foreground2": "#1e754f",
    "editorBracketHighlight.foreground3": "#a65e2b",
    "editorBracketHighlight.foreground4": "#a13865",
    "editorBracketHighlight.foreground5": "#bda437",
    "editorBracketHighlight.foreground6": "#296aa3",
    "debugToolBar.background": "transparent",
    "editor.stackFrameHighlightBackground": "#fffbdd",
    "editor.focusedStackFrameHighlightBackground": "#fff5b1",
    "peekViewEditor.background": "transparent",
    "peekViewResult.background": "transparent",
    "settings.headerForeground": "#393a34",
    "settings.modifiedItemIndicator": "#1c6b48",
    "welcomePage.buttonBackground": "#f6f8fa",
    "welcomePage.buttonHoverBackground": "#e1e4e8",
    "problemsErrorIcon.foreground": "#ab5959",
    "problemsWarningIcon.foreground": "#a65e2b",
    "problemsInfoIcon.foreground": "#296aa3",
    "editorError.foreground": "#ab5959",
    "editorWarning.foreground": "#a65e2b",
    "editorInfo.foreground": "#296aa3",
    "editorHint.foreground": "#1e754f",
    "editorGutter.commentRangeForeground": "#393a3450",
    "editorGutter.foldingControlForeground": "#393a3490",
    "editorInlayHint.foreground": "#C0C5CE",
    "editorInlayHint.background": "#00000000",
    "editorStickyScroll.background": "#f7f7f7",
    "editorStickyScrollHover.background": "#f7f7f7",
    "menu.separatorBackground": "#f0f0f0"
  },
  semanticHighlighting: !0,
  semanticTokenColors: {
    namespace: "#b05a78",
    property: "#D08770",
    interface: "#2e808f",
    type: "#2e808f",
    class: "#5a6aa6"
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "#a0ada0"
      }
    },
    {
      scope: [
        "delimiter.bracket",
        "delimiter",
        "invalid.illegal.character-not-allowed-here.html",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational",
        "keyword.operator.assignment",
        "meta.brace",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.structure.input.void.html",
        "meta.type.annotation",
        "meta.embedded.block.github-actions-expression",
        "storage.type.function.arrow",
        "keyword.operator.type",
        "meta.objectliteral.ts",
        "punctuation"
      ],
      settings: {
        foreground: "#C0C5CE"
      }
    },
    {
      scope: ["constant", "entity.name.constant", "variable.language", "meta.definition.variable"],
      settings: {
        foreground: "#a65e2b"
      }
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: "#59873a"
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "#393a34"
      }
    },
    {
      scope: ["entity.name.tag", "tag.html"],
      settings: {
        foreground: "#1e754f"
      }
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: "#59873a"
      }
    },
    {
      scope: ["keyword", "storage.type.class.jsdoc"],
      settings: {
        foreground: "#1e754f"
      }
    },
    {
      scope: [
        "storage",
        "storage.type",
        "support.type.builtin",
        "constant.language.undefined",
        "constant.language.null"
      ],
      settings: {
        foreground: "#ab5959"
      }
    },
    {
      scope: [
        "text.html.derivative",
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java"
      ],
      settings: {
        foreground: "#393a34"
      }
    },
    {
      scope: ["string", "string punctuation.section.embedded source", "attribute.value"],
      settings: {
        foreground: "#A3BE8C"
      }
    },
    {
      scope: "punctuation.support.type.property-name",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "punctuation.definition.string",
      settings: {
        foreground: "#A3BE8C"
      }
    },
    {
      scope: "support",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: [
        "property",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
        "attribute.name"
      ],
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: ["entity.other.attribute-name", "invalid.deprecated.entity.other.attribute-name.html"],
      settings: {
        foreground: "#b07d48"
      }
    },
    {
      scope: ["variable", "identifier"],
      settings: {
        foreground: "#b07d48"
      }
    },
    {
      scope: ["support.type.primitive", "entity.name.type"],
      settings: {
        foreground: "#2e8f82"
      }
    },
    {
      scope: "namespace",
      settings: {
        foreground: "#b05a78"
      }
    },
    {
      scope: ["keyword.operator", "keyword.operator.assignment.compound", "meta.var.expr.ts"],
      settings: {
        foreground: "#ab5959"
      }
    },
    {
      scope: "invalid.broken",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "invalid.deprecated",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "invalid.illegal",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: "#d73a49",
        foreground: "#fafbfc",
        content: "^M"
      }
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#A3BE8C"
      }
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: "#ab5e3f"
      }
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      settings: {
        foreground: "#A3BE8C"
      }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: "#bda437"
      }
    },
    {
      scope: ["support.constant"],
      settings: {
        foreground: "#a65e2b"
      }
    },
    {
      scope: ["constant.numeric", "number"],
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: "#ab5959"
      }
    },
    {
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: "#1e754f"
      }
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#1c6b48"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#a65e2b"
      }
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: "#1c6b48"
      }
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#2e808f"
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "#393a34"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#393a34"
      }
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: "#1c6b48"
      }
    },
    {
      scope: ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      settings: {
        background: "#ffeef0",
        foreground: "#D08770"
      }
    },
    {
      scope: ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      settings: {
        background: "#f0fff4",
        foreground: "#22863a"
      }
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: "#ffebda",
        foreground: "#e36209"
      }
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: "#f6f8fa",
        background: "#005cc5"
      }
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: "#6f42c1",
        fontStyle: "bold"
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "#005cc5"
      }
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#005cc5"
      }
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      settings: {
        foreground: "#586069"
      }
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#D08770"
      }
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown"
      ],
      settings: {
        foreground: "#A3BE8C"
      }
    },
    {
      scope: ["markup.underline.link.markdown", "markup.underline.link.image.markdown"],
      settings: {
        foreground: "#393a3490",
        fontStyle: "underline"
      }
    },
    {
      scope: ["type.identifier"],
      settings: {
        foreground: "#5a6aa6"
      }
    },
    {
      scope: ["entity.other.attribute-name.html.vue"],
      settings: {
        foreground: "#59873a"
      }
    },
    {
      scope: ["invalid.illegal.unrecognized-tag.html"],
      settings: {
        fontStyle: "normal"
      }
    }
  ],
  rules: [
    {
      token: "comment",
      foreground: "a0ada0"
    },
    {
      token: "punctuation.definition.comment",
      foreground: "a0ada0"
    },
    {
      token: "string.comment",
      foreground: "a0ada0"
    },
    {
      token: "delimiter.bracket",
      foreground: "999999"
    },
    {
      token: "delimiter",
      foreground: "999999"
    },
    {
      token: "invalid.illegal.character-not-allowed-here.html",
      foreground: "999999"
    },
    {
      token: "keyword.operator.rest",
      foreground: "999999"
    },
    {
      token: "keyword.operator.spread",
      foreground: "999999"
    },
    {
      token: "keyword.operator.type.annotation",
      foreground: "999999"
    },
    {
      token: "keyword.operator.relational",
      foreground: "999999"
    },
    {
      token: "keyword.operator.assignment",
      foreground: "999999"
    },
    {
      token: "meta.brace",
      foreground: "999999"
    },
    {
      token: "meta.tag.block.any.html",
      foreground: "999999"
    },
    {
      token: "meta.tag.inline.any.html",
      foreground: "999999"
    },
    {
      token: "meta.tag.structure.input.void.html",
      foreground: "999999"
    },
    {
      token: "meta.type.annotation",
      foreground: "999999"
    },
    {
      token: "meta.embedded.block.github-actions-expression",
      foreground: "999999"
    },
    {
      token: "storage.type.function.arrow",
      foreground: "999999"
    },
    {
      token: "keyword.operator.type",
      foreground: "999999"
    },
    {
      token: "meta.objectliteral.ts",
      foreground: "999999"
    },
    {
      token: "punctuation",
      foreground: "999999"
    },
    {
      token: "constant",
      foreground: "a65e2b"
    },
    {
      token: "entity.name.constant",
      foreground: "a65e2b"
    },
    {
      token: "variable.language",
      foreground: "a65e2b"
    },
    {
      token: "meta.definition.variable",
      foreground: "a65e2b"
    },
    {
      token: "entity",
      foreground: "59873a"
    },
    {
      token: "entity.name",
      foreground: "59873a"
    },
    {
      token: "variable.parameter.function",
      foreground: "393a34"
    },
    {
      token: "entity.name.tag",
      foreground: "1e754f"
    },
    {
      token: "tag.html",
      foreground: "1e754f"
    },
    {
      token: "entity.name.function",
      foreground: "59873a"
    },
    {
      token: "keyword",
      foreground: "1e754f"
    },
    {
      token: "storage.type.class.jsdoc",
      foreground: "1e754f"
    },
    {
      token: "storage",
      foreground: "ab5959"
    },
    {
      token: "storage.type",
      foreground: "ab5959"
    },
    {
      token: "support.type.builtin",
      foreground: "ab5959"
    },
    {
      token: "constant.language.undefined",
      foreground: "ab5959"
    },
    {
      token: "constant.language.null",
      foreground: "ab5959"
    },
    {
      token: "text.html.derivative",
      foreground: "393a34"
    },
    {
      token: "storage.modifier.package",
      foreground: "393a34"
    },
    {
      token: "storage.modifier.import",
      foreground: "393a34"
    },
    {
      token: "storage.type.java",
      foreground: "393a34"
    },
    {
      token: "string",
      foreground: "b56959"
    },
    {
      token: "string punctuation.section.embedded source",
      foreground: "b56959"
    },
    {
      token: "attribute.value",
      foreground: "b56959"
    },
    {
      token: "punctuation.definition.string",
      foreground: "b5695999"
    },
    {
      token: "punctuation.support.type.property-name",
      foreground: "b5695999"
    },
    {
      token: "support",
      foreground: "998418"
    },
    {
      token: "property",
      foreground: "998418"
    },
    {
      token: "meta.property-name",
      foreground: "998418"
    },
    {
      token: "meta.object-literal.key",
      foreground: "998418"
    },
    {
      token: "entity.name.tag.yaml",
      foreground: "998418"
    },
    {
      token: "attribute.name",
      foreground: "998418"
    },
    {
      token: "entity.other.attribute-name",
      foreground: "b07d48"
    },
    {
      token: "invalid.deprecated.entity.other.attribute-name.html",
      foreground: "b07d48"
    },
    {
      token: "variable",
      foreground: "b07d48"
    },
    {
      token: "identifier",
      foreground: "b07d48"
    },
    {
      token: "support.type.primitive",
      foreground: "2e8f82"
    },
    {
      token: "entity.name.type",
      foreground: "2e8f82"
    },
    {
      token: "namespace",
      foreground: "b05a78"
    },
    {
      token: "keyword.operator",
      foreground: "ab5959"
    },
    {
      token: "keyword.operator.assignment.compound",
      foreground: "ab5959"
    },
    {
      token: "meta.var.expr.ts",
      foreground: "ab5959"
    },
    {
      token: "invalid.broken",
      foreground: "b31d28"
    },
    {
      token: "invalid.deprecated",
      foreground: "b31d28"
    },
    {
      token: "invalid.illegal",
      foreground: "b31d28"
    },
    {
      token: "invalid.unimplemented",
      foreground: "b31d28"
    },
    {
      token: "carriage-return",
      foreground: "fafbfc"
    },
    {
      token: "message.error",
      foreground: "b31d28"
    },
    {
      token: "string variable",
      foreground: "b56959"
    },
    {
      token: "source.regexp",
      foreground: "ab5e3f"
    },
    {
      token: "string.regexp",
      foreground: "ab5e3f"
    },
    {
      token: "string.regexp.character-class",
      foreground: "b56959"
    },
    {
      token: "string.regexp constant.character.escape",
      foreground: "b56959"
    },
    {
      token: "string.regexp source.ruby.embedded",
      foreground: "b56959"
    },
    {
      token: "string.regexp string.regexp.arbitrary-repitition",
      foreground: "b56959"
    },
    {
      token: "string.regexp constant.character.escape",
      foreground: "bda437"
    },
    {
      token: "support.constant",
      foreground: "a65e2b"
    },
    {
      token: "constant.numeric",
      foreground: "2f798a"
    },
    {
      token: "number",
      foreground: "2f798a"
    },
    {
      token: "keyword.other.unit",
      foreground: "ab5959"
    },
    {
      token: "constant.language.boolean",
      foreground: "1e754f"
    },
    {
      token: "constant.language",
      foreground: "1e754f"
    },
    {
      token: "meta.module-reference",
      foreground: "1c6b48"
    },
    {
      token: "punctuation.definition.list.begin.markdown",
      foreground: "a65e2b"
    },
    {
      token: "markup.heading",
      foreground: "1c6b48"
    },
    {
      token: "markup.heading entity.name",
      foreground: "1c6b48"
    },
    {
      token: "markup.quote",
      foreground: "2e808f"
    },
    {
      token: "markup.italic",
      foreground: "393a34"
    },
    {
      token: "markup.bold",
      foreground: "393a34"
    },
    {
      token: "markup.raw",
      foreground: "1c6b48"
    },
    {
      token: "markup.deleted",
      foreground: "b31d28"
    },
    {
      token: "meta.diff.header.from-file",
      foreground: "b31d28"
    },
    {
      token: "punctuation.definition.deleted",
      foreground: "b31d28"
    },
    {
      token: "markup.inserted",
      foreground: "22863a"
    },
    {
      token: "meta.diff.header.to-file",
      foreground: "22863a"
    },
    {
      token: "punctuation.definition.inserted",
      foreground: "22863a"
    },
    {
      token: "markup.changed",
      foreground: "e36209"
    },
    {
      token: "punctuation.definition.changed",
      foreground: "e36209"
    },
    {
      token: "markup.ignored",
      foreground: "f6f8fa"
    },
    {
      token: "markup.untracked",
      foreground: "f6f8fa"
    },
    {
      token: "meta.diff.range",
      foreground: "6f42c1"
    },
    {
      token: "meta.diff.header",
      foreground: "005cc5"
    },
    {
      token: "meta.separator",
      foreground: "005cc5"
    },
    {
      token: "meta.output",
      foreground: "005cc5"
    },
    {
      token: "brackethighlighter.tag",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.curly",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.round",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.square",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.angle",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.quote",
      foreground: "586069"
    },
    {
      token: "brackethighlighter.unmatched",
      foreground: "b31d28"
    },
    {
      token: "constant.other.reference.link",
      foreground: "b56959"
    },
    {
      token: "string.other.link",
      foreground: "b56959"
    },
    {
      token: "punctuation.definition.string.begin.markdown",
      foreground: "b56959"
    },
    {
      token: "punctuation.definition.string.end.markdown",
      foreground: "b56959"
    },
    {
      token: "markup.underline.link.markdown",
      foreground: "393a3490"
    },
    {
      token: "markup.underline.link.image.markdown",
      foreground: "393a3490"
    },
    {
      token: "type.identifier",
      foreground: "5a6aa6"
    },
    {
      token: "entity.other.attribute-name.html.vue",
      foreground: "59873a"
    },
    {
      token: "invalid.illegal.unrecognized-tag.html"
    }
  ]
};
export {
  e as default
};
