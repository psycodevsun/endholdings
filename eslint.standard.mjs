// 웹 공통 lint 표준 규칙. 여러 프로젝트가 같은 원본을 복사해 쓰는 사본이므로 이 파일을 직접 고치지 않는다.
// 기존 위반은 eslint-suppressions.json에 기록해 두고, 새로 생기거나 늘어나는 위반만 실패로 처리한다.
// 규칙만 담는다. 'react'·'jsx-a11y' 플러그인 등록은 프로젝트 설정이 맡는다(eslint-config-next는 둘 다 등록한다).
// jsx-a11y 규칙은 eslint-plugin-jsx-a11y 6.10.2의 recommended 구성과 같다.
// dangerouslySetInnerHTML은 서버가 정화를 보장하는 HTML, '<'를 이스케이프한 JSON-LD, 런타임 데이터가 없는 상수 스크립트에만 쓰고
// 해당 줄에서만 사유와 함께 react/no-danger를 끈다.
const standard = [
  {
    name: 'web-standard/rules',
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    rules: {
      "react/no-danger": "error",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-ambiguous-text": "off",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/autocomplete-valid": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/control-has-associated-label": [
        "off",
        {
          "ignoreElements": [
            "audio",
            "canvas",
            "embed",
            "input",
            "textarea",
            "tr",
            "video"
          ],
          "ignoreRoles": [
            "grid",
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "row",
            "tablist",
            "toolbar",
            "tree",
            "treegrid"
          ],
          "includeRoles": [
            "alert",
            "dialog"
          ]
        }
      ],
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": [
        "error",
        {
          "tabbable": [
            "button",
            "checkbox",
            "link",
            "searchbox",
            "spinbutton",
            "switch",
            "textbox"
          ]
        }
      ],
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": [
        "error",
        {
          "tr": [
            "none",
            "presentation"
          ],
          "canvas": [
            "img"
          ]
        }
      ],
      "jsx-a11y/no-noninteractive-element-interactions": [
        "error",
        {
          "handlers": [
            "onClick",
            "onError",
            "onLoad",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
          ],
          "alert": [
            "onKeyUp",
            "onKeyDown",
            "onKeyPress"
          ],
          "body": [
            "onError",
            "onLoad"
          ],
          "dialog": [
            "onKeyUp",
            "onKeyDown",
            "onKeyPress"
          ],
          "iframe": [
            "onError",
            "onLoad"
          ],
          "img": [
            "onError",
            "onLoad"
          ]
        }
      ],
      "jsx-a11y/no-noninteractive-element-to-interactive-role": [
        "error",
        {
          "ul": [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid"
          ],
          "ol": [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid"
          ],
          "li": [
            "menuitem",
            "menuitemradio",
            "menuitemcheckbox",
            "option",
            "row",
            "tab",
            "treeitem"
          ],
          "table": [
            "grid"
          ],
          "td": [
            "gridcell"
          ],
          "fieldset": [
            "radiogroup",
            "presentation"
          ]
        }
      ],
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {
          "tags": [],
          "roles": [
            "tabpanel"
          ],
          "allowExpressionValues": true
        }
      ],
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/no-static-element-interactions": [
        "error",
        {
          "allowExpressionValues": true,
          "handlers": [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp"
          ]
        }
      ],
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error"
    },
  },
]

export default standard
