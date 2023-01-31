"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_ToolBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ToolBar */ \"./components/ToolBar.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ \"./pages/queries.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst IndexPage = ()=>{\n    _s();\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS);\n    const [toggleSpeakerFavorite] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_SPEAKER_FAVORITE);\n    const [deleteSpeaker] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.DELETE_SPEAKER);\n    const [addSpeaker] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.ADD_SPEAKER);\n    if (loading === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-sm6\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 32\n    }, undefined);\n    if (error === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-sm6\",\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToolBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                insertSpeakerEvent: (first, last, favorite)=>{\n                    addSpeaker({\n                        variables: {\n                            first,\n                            last,\n                            favorite\n                        },\n                        //refetchQueries: [{ query: GET_SPEAKERS }],\n                        /* the above commented out code makes a request to the server \n              this function is for replace the cache which in turn will update the server which means we dont have \n              to make a request to the server to get more data which improves performance\n              @param: cache = our current apollo cache\n              @param: results of mutation(aka data is the new inserted record)\n            */ update: (cache, param)=>{\n                            let { data: { addSpeaker  } , loading , errored , called , client  } = param;\n                            //read the cache desired cache list\n                            const { speakers  } = cache.readQuery({\n                                query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS\n                            });\n                            //replace the cache\n                            cache.writeQuery({\n                                query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS,\n                                data: {\n                                    speakers: {\n                                        _typename: \"SpeakerResults\",\n                                        datalist: [\n                                            addSpeaker,\n                                            ...speakers.datalist\n                                        ]\n                                    }\n                                }\n                            });\n                        }\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container show-fav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fav-list\",\n                        children: data.speakers.datalist.map((param)=>{\n                            let { id , first , last , favorite  } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"favbox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fav-clm col-sm-7\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            children: [\n                                                first,\n                                                \" \",\n                                                last,\n                                                \" (\",\n                                                id,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fav-clm col-sm-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"action\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    onClick: ()=>{\n                                                        toggleSpeakerFavorite({\n                                                            variables: {\n                                                                speakerId: parseInt(id)\n                                                            }\n                                                        });\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"\\xa0\\xa0 Favorite\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    onClick: ()=>{\n                                                        deleteSpeaker({\n                                                            variables: {\n                                                                speakerId: parseInt(id)\n                                                            },\n                                                            //refetchQueries: [{ query: GET_SPEAKERS }],\n                                                            update: (cache, param)=>{\n                                                                let { data: { deleteSpeaker  } , loading , errored , called , client  } = param;\n                                                                //read the cache desired cache list\n                                                                const { speakers  } = cache.readQuery({\n                                                                    query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS\n                                                                });\n                                                                //replace the cache\n                                                                cache.writeQuery({\n                                                                    query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS,\n                                                                    data: {\n                                                                        speakers: {\n                                                                            _typename: \"SpeakerResults\",\n                                                                            datalist: [\n                                                                                addSpeaker,\n                                                                                ...speakers.datalist\n                                                                            ]\n                                                                        }\n                                                                    }\n                                                                });\n                                                            }\n                                                        });\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa fa-trash red\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                            lineNumber: 128,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \" Delete\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(IndexPage, \"bOjbjRYVWD/9rfcrpJcgObmerRo=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dFQUNyQjtnRUFDQSxtQkFBbUI7Z0VBQ25CbUIsTUFBTU8sVUFBVSxDQUFDO29FQUNmRCxPQUFPekIsa0RBQVlBO29FQUNuQk8sTUFBTTt3RUFDSmdCLFVBQVU7NEVBQ1JJLFdBQVc7NEVBQ1hDLFVBQVU7Z0ZBQ1JsQjttRkFDR2EsU0FBU0ssUUFBUTs2RUFDckI7d0VBQ0g7b0VBQ0Y7Z0VBQ0Y7NERBQ0Y7d0RBQ0Y7b0RBQ0Y7O3NFQUVBLDhEQUFDUTs0REFBRXhCLFdBQVU7Ozs7Ozt3REFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBaEVaa0I7Ozs7O3dCQXNFakM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBbElNMUI7O1FBQzZCTixvREFBUUE7UUFDVEQsdURBQVdBO1FBQ25CQSx1REFBV0E7UUFDZEEsdURBQVdBOzs7S0FKNUJPO0FBb0lOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub29sQmFyJztcbmltcG9ydCB7XG4gIEdFVF9TUEVBS0VSUyxcbiAgVE9HR0xFX1NQRUFLRVJfRkFWT1JJVEUsXG4gIERFTEVURV9TUEVBS0VSLFxuICBBRERfU1BFQUtFUixcbn0gZnJvbSAnLi9xdWVyaWVzJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfU1BFQUtFUlMpO1xuICBjb25zdCBbdG9nZ2xlU3BlYWtlckZhdm9yaXRlXSA9IHVzZU11dGF0aW9uKFRPR0dMRV9TUEVBS0VSX0ZBVk9SSVRFKTtcbiAgY29uc3QgW2RlbGV0ZVNwZWFrZXJdID0gdXNlTXV0YXRpb24oREVMRVRFX1NQRUFLRVIpO1xuICBjb25zdCBbYWRkU3BlYWtlcl0gPSB1c2VNdXRhdGlvbihBRERfU1BFQUtFUik7XG5cbiAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbTZcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIGlmIChlcnJvciA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtNlwiPkVycm9yPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb29sQmFyXG4gICAgICAgIGluc2VydFNwZWFrZXJFdmVudD17KGZpcnN0LCBsYXN0LCBmYXZvcml0ZSkgPT4ge1xuICAgICAgICAgIGFkZFNwZWFrZXIoe1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgIGZpcnN0LFxuICAgICAgICAgICAgICBsYXN0LFxuICAgICAgICAgICAgICBmYXZvcml0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL3JlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX1NQRUFLRVJTIH1dLFxuICAgICAgICAgICAgLyogdGhlIGFib3ZlIGNvbW1lbnRlZCBvdXQgY29kZSBtYWtlcyBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciBcbiAgICAgICAgICAgICAgdGhpcyBmdW5jdGlvbiBpcyBmb3IgcmVwbGFjZSB0aGUgY2FjaGUgd2hpY2ggaW4gdHVybiB3aWxsIHVwZGF0ZSB0aGUgc2VydmVyIHdoaWNoIG1lYW5zIHdlIGRvbnQgaGF2ZSBcbiAgICAgICAgICAgICAgdG8gbWFrZSBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB0byBnZXQgbW9yZSBkYXRhIHdoaWNoIGltcHJvdmVzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIEBwYXJhbTogY2FjaGUgPSBvdXIgY3VycmVudCBhcG9sbG8gY2FjaGVcbiAgICAgICAgICAgICAgQHBhcmFtOiByZXN1bHRzIG9mIG11dGF0aW9uKGFrYSBkYXRhIGlzIHRoZSBuZXcgaW5zZXJ0ZWQgcmVjb3JkKVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZTogKFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgeyBkYXRhOiB7IGFkZFNwZWFrZXIgfSwgbG9hZGluZywgZXJyb3JlZCwgY2FsbGVkLCBjbGllbnQgfSxcbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAvL3JlYWQgdGhlIGNhY2hlIGRlc2lyZWQgY2FjaGUgbGlzdFxuICAgICAgICAgICAgICBjb25zdCB7IHNwZWFrZXJzIH0gPSBjYWNoZS5yZWFkUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBHRVRfU1BFQUtFUlMsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvL3JlcGxhY2UgdGhlIGNhY2hlXG4gICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBHRVRfU1BFQUtFUlMsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgc3BlYWtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGVuYW1lOiAnU3BlYWtlclJlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhbGlzdDogW2FkZFNwZWFrZXIsIC4uLnNwZWFrZXJzLmRhdGFsaXN0XSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNob3ctZmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXYtbGlzdFwiPlxuICAgICAgICAgICAge2RhdGEuc3BlYWtlcnMuZGF0YWxpc3QubWFwKCh7IGlkLCBmaXJzdCwgbGFzdCwgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2Ym94XCIga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdi1jbG0gY29sLXNtLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9ICh7aWR9KVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdi1jbG0gY29sLXNtLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcklkOiBwYXJzZUludChpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnZmEgZmEtc3RhciBvcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdmYSBmYS1zdGFyLW8gb3JhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7IEZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVNwZWFrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcklkOiBwYXJzZUludChpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX1NQRUFLRVJTIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgZGVsZXRlU3BlYWtlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JlYWQgdGhlIGNhY2hlIGRlc2lyZWQgY2FjaGUgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzcGVha2VycyB9ID0gY2FjaGUucmVhZFF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IEdFVF9TUEVBS0VSUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXBsYWNlIHRoZSBjYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBHRVRfU1BFQUtFUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2Vyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3R5cGVuYW1lOiAnU3BlYWtlclJlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YWxpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkU3BlYWtlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcnMuZGF0YWxpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2ggcmVkXCIgLz4gRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIlRvb2xCYXIiLCJHRVRfU1BFQUtFUlMiLCJUT0dHTEVfU1BFQUtFUl9GQVZPUklURSIsIkRFTEVURV9TUEVBS0VSIiwiQUREX1NQRUFLRVIiLCJJbmRleFBhZ2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidG9nZ2xlU3BlYWtlckZhdm9yaXRlIiwiZGVsZXRlU3BlYWtlciIsImFkZFNwZWFrZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnNlcnRTcGVha2VyRXZlbnQiLCJmaXJzdCIsImxhc3QiLCJmYXZvcml0ZSIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImNhY2hlIiwiZXJyb3JlZCIsImNhbGxlZCIsImNsaWVudCIsInNwZWFrZXJzIiwicmVhZFF1ZXJ5IiwicXVlcnkiLCJ3cml0ZVF1ZXJ5IiwiX3R5cGVuYW1lIiwiZGF0YWxpc3QiLCJtYXAiLCJpZCIsImg0Iiwic3BhbiIsIm9uQ2xpY2siLCJzcGVha2VySWQiLCJwYXJzZUludCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});