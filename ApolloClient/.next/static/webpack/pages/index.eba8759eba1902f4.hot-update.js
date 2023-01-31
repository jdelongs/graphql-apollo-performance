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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_ToolBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ToolBar */ \"./components/ToolBar.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries */ \"./pages/queries.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst IndexPage = ()=>{\n    _s();\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS);\n    const [toggleSpeakerFavorite] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_SPEAKER_FAVORITE);\n    const [deleteSpeaker] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.DELETE_SPEAKER);\n    const [addSpeaker] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_queries__WEBPACK_IMPORTED_MODULE_2__.ADD_SPEAKER);\n    if (loading === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-sm6\",\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 32\n    }, undefined);\n    if (error === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-sm6\",\n        children: \"Error\"\n    }, void 0, false, {\n        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToolBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                insertSpeakerEvent: (first, last, favorite)=>{\n                    addSpeaker({\n                        variables: {\n                            first,\n                            last,\n                            favorite\n                        },\n                        //refetchQueries: [{ query: GET_SPEAKERS }],\n                        /* the above commented out code makes a request to the server \n              this function is for replace the cache which in turn will update the server which means we dont have \n              to make a request to the server to get more data which improves performance\n              @param: cache = our current apollo cache\n              @param: results of mutation(aka data is the new inserted record)\n            */ update: (cache, param)=>{\n                            let { data: { addSpeaker  } , loading , errored , called , client  } = param;\n                            //read the cache desired cache list\n                            const { speakers  } = cache.readQuery({\n                                query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS\n                            });\n                            //replace the cache\n                            cache.writeQuery({\n                                query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS,\n                                data: {\n                                    speakers: {\n                                        _typename: \"SpeakerResults\",\n                                        datalist: [\n                                            addSpeaker,\n                                            ...speakers.datalist\n                                        ]\n                                    }\n                                }\n                            });\n                        }\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container show-fav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fav-list\",\n                        children: data.speakers.datalist.map((param)=>{\n                            let { id , first , last , favorite  } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"favbox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fav-clm col-sm-7\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            children: [\n                                                first,\n                                                \" \",\n                                                last,\n                                                \" (\",\n                                                id,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fav-clm col-sm-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"action\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    onClick: ()=>{\n                                                        toggleSpeakerFavorite({\n                                                            variables: {\n                                                                speakerId: parseInt(id)\n                                                            }\n                                                        });\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \"\\xa0\\xa0 Favorite\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    onClick: ()=>{\n                                                        deleteSpeaker({\n                                                            variables: {\n                                                                speakerId: parseInt(id)\n                                                            },\n                                                            //optimist UI\n                                                            optimisticResponse: {\n                                                                _typename: \"__mutation\",\n                                                                deleteSpeaker: {\n                                                                    id,\n                                                                    first,\n                                                                    last,\n                                                                    favorite,\n                                                                    __typename: \"Speaker\"\n                                                                }\n                                                            },\n                                                            //refetchQueries: [{ query: GET_SPEAKERS }],\n                                                            update: (cache, param)=>{\n                                                                let { data: { deleteSpeaker  } , loading , errored , called , client  } = param;\n                                                                //read the cache desired cache list\n                                                                const { speakers  } = cache.readQuery({\n                                                                    query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS\n                                                                });\n                                                                //replace the cache\n                                                                cache.writeQuery({\n                                                                    query: _queries__WEBPACK_IMPORTED_MODULE_2__.GET_SPEAKERS,\n                                                                    data: {\n                                                                        speakers: {\n                                                                            _typename: \"SpeakerResults\",\n                                                                            datalist: speakers.datalist.filter((record)=>record.id != deleteSpeaker.id)\n                                                                        }\n                                                                    }\n                                                                });\n                                                            }\n                                                        });\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fa fa-trash red\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                            lineNumber: 149,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        \" Delete\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jdelong/Documents/graphql-performance/ApolloClient/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(IndexPage, \"bOjbjRYVWD/9rfcrpJcgObmerRo=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFNLEVBQ05DLE9BQU0sRUFDUDtnRUFFRCxtQ0FBbUM7Z0VBQ25DLE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdKLE1BQU1LLFNBQVMsQ0FBQztvRUFDbkNDLE9BQU96QixrREFBWUE7Z0VBQ3JCO2dFQUNBLG1CQUFtQjtnRUFDbkJtQixNQUFNTyxVQUFVLENBQUM7b0VBQ2ZELE9BQU96QixrREFBWUE7b0VBQ25CTyxNQUFNO3dFQUNKZ0IsVUFBVTs0RUFDUkksV0FBVzs0RUFDWEMsVUFBVUwsU0FBU0ssUUFBUSxDQUFDVSxNQUFNLENBQ2hDLENBQUNDLFNBQVdBLE9BQU9ULEVBQUUsSUFBSXJCLGNBQWNxQixFQUFFO3dFQUU3QztvRUFDRjtnRUFDRjs0REFDRjt3REFDRjtvREFDRjs7c0VBRUEsOERBQUNVOzREQUFFNUIsV0FBVTs7Ozs7O3dEQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFyRlprQjs7Ozs7d0JBMkZqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0F2Sk0xQjs7UUFDNkJOLG9EQUFRQTtRQUNURCx1REFBV0E7UUFDbkJBLHVEQUFXQTtRQUNkQSx1REFBV0E7OztLQUo1Qk87QUF5Sk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xCYXInO1xuaW1wb3J0IHtcbiAgR0VUX1NQRUFLRVJTLFxuICBUT0dHTEVfU1BFQUtFUl9GQVZPUklURSxcbiAgREVMRVRFX1NQRUFLRVIsXG4gIEFERF9TUEVBS0VSLFxufSBmcm9tICcuL3F1ZXJpZXMnO1xuXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9TUEVBS0VSUyk7XG4gIGNvbnN0IFt0b2dnbGVTcGVha2VyRmF2b3JpdGVdID0gdXNlTXV0YXRpb24oVE9HR0xFX1NQRUFLRVJfRkFWT1JJVEUpO1xuICBjb25zdCBbZGVsZXRlU3BlYWtlcl0gPSB1c2VNdXRhdGlvbihERUxFVEVfU1BFQUtFUik7XG4gIGNvbnN0IFthZGRTcGVha2VyXSA9IHVzZU11dGF0aW9uKEFERF9TUEVBS0VSKTtcblxuICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtNlwiPkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgaWYgKGVycm9yID09PSB0cnVlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb2wtc202XCI+RXJyb3I8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvb2xCYXJcbiAgICAgICAgaW5zZXJ0U3BlYWtlckV2ZW50PXsoZmlyc3QsIGxhc3QsIGZhdm9yaXRlKSA9PiB7XG4gICAgICAgICAgYWRkU3BlYWtlcih7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICAgIGxhc3QsXG4gICAgICAgICAgICAgIGZhdm9yaXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBHRVRfU1BFQUtFUlMgfV0sXG4gICAgICAgICAgICAvKiB0aGUgYWJvdmUgY29tbWVudGVkIG91dCBjb2RlIG1ha2VzIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIFxuICAgICAgICAgICAgICB0aGlzIGZ1bmN0aW9uIGlzIGZvciByZXBsYWNlIHRoZSBjYWNoZSB3aGljaCBpbiB0dXJuIHdpbGwgdXBkYXRlIHRoZSBzZXJ2ZXIgd2hpY2ggbWVhbnMgd2UgZG9udCBoYXZlIFxuICAgICAgICAgICAgICB0byBtYWtlIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGdldCBtb3JlIGRhdGEgd2hpY2ggaW1wcm92ZXMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgQHBhcmFtOiBjYWNoZSA9IG91ciBjdXJyZW50IGFwb2xsbyBjYWNoZVxuICAgICAgICAgICAgICBAcGFyYW06IHJlc3VsdHMgb2YgbXV0YXRpb24oYWthIGRhdGEgaXMgdGhlIG5ldyBpbnNlcnRlZCByZWNvcmQpXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlOiAoXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7IGRhdGE6IHsgYWRkU3BlYWtlciB9LCBsb2FkaW5nLCBlcnJvcmVkLCBjYWxsZWQsIGNsaWVudCB9LFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgIC8vcmVhZCB0aGUgY2FjaGUgZGVzaXJlZCBjYWNoZSBsaXN0XG4gICAgICAgICAgICAgIGNvbnN0IHsgc3BlYWtlcnMgfSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IEdFVF9TUEVBS0VSUyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vcmVwbGFjZSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IEdFVF9TUEVBS0VSUyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICBzcGVha2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZW5hbWU6ICdTcGVha2VyUmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFsaXN0OiBbYWRkU3BlYWtlciwgLi4uc3BlYWtlcnMuZGF0YWxpc3RdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc2hvdy1mYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdi1saXN0XCI+XG4gICAgICAgICAgICB7ZGF0YS5zcGVha2Vycy5kYXRhbGlzdC5tYXAoKHsgaWQsIGZpcnN0LCBsYXN0LCBmYXZvcml0ZSB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZib3hcIiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2LWNsbSBjb2wtc20tN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH0gKHtpZH0pXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2LWNsbSBjb2wtc20tNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VySWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb3B0aW1pc3QgVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIF90eXBlbmFtZTogJ19fbXV0YXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmaXJzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGFzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmF2b3JpdGU6ICFmYXZvcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgX190eXBlbmFtZTogJ1NwZWFrZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdmYSBmYS1zdGFyIG9yYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2ZhIGZhLXN0YXItbyBvcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsgRmF2b3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU3BlYWtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VySWQ6IHBhcnNlSW50KGlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vb3B0aW1pc3QgVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90eXBlbmFtZTogJ19fbXV0YXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlU3BlYWtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiAnU3BlYWtlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9TUEVBS0VSUyB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGRlbGV0ZVNwZWFrZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWFkIHRoZSBjYWNoZSBkZXNpcmVkIGNhY2hlIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3BlYWtlcnMgfSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBHRVRfU1BFQUtFUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVwbGFjZSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogR0VUX1NQRUFLRVJTLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90eXBlbmFtZTogJ1NwZWFrZXJSZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFsaXN0OiBzcGVha2Vycy5kYXRhbGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWNvcmQpID0+IHJlY29yZC5pZCAhPSBkZWxldGVTcGVha2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoIHJlZFwiIC8+IERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuIl0sIm5hbWVzIjpbInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJUb29sQmFyIiwiR0VUX1NQRUFLRVJTIiwiVE9HR0xFX1NQRUFLRVJfRkFWT1JJVEUiLCJERUxFVEVfU1BFQUtFUiIsIkFERF9TUEVBS0VSIiwiSW5kZXhQYWdlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImRlbGV0ZVNwZWFrZXIiLCJhZGRTcGVha2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5zZXJ0U3BlYWtlckV2ZW50IiwiZmlyc3QiLCJsYXN0IiwiZmF2b3JpdGUiLCJ2YXJpYWJsZXMiLCJ1cGRhdGUiLCJjYWNoZSIsImVycm9yZWQiLCJjYWxsZWQiLCJjbGllbnQiLCJzcGVha2VycyIsInJlYWRRdWVyeSIsInF1ZXJ5Iiwid3JpdGVRdWVyeSIsIl90eXBlbmFtZSIsImRhdGFsaXN0IiwibWFwIiwiaWQiLCJoNCIsInNwYW4iLCJvbkNsaWNrIiwic3BlYWtlcklkIiwicGFyc2VJbnQiLCJvcHRpbWlzdGljUmVzcG9uc2UiLCJfX3R5cGVuYW1lIiwiZmlsdGVyIiwicmVjb3JkIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});