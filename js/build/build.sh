#!/bin/bash
tsc ../src/helpers.ts ../src/types.ts ../src/main.ts --out ts-compiler.js
tsc ../src/direct-run.ts --out direct-run.js
java -jar ClosureCompiler/compiler.jar --language_in ECMASCRIPT5 --js ts-compiler.js --js_output_file ts-compiler.min.js
java -jar ClosureCompiler/compiler.jar --language_in ECMASCRIPT5 --js typescript.js --js ts-compiler.min.js --js_output_file TSCompiler.js --compilation_level WHITESPACE_ONLY --formatting PRETTY_PRINT
java -jar ClosureCompiler/compiler.jar --language_in ECMASCRIPT5 --js typescript.js --js ts-compiler.min.js --js_output_file TSCompiler.min.js
java -jar ClosureCompiler/compiler.jar --language_in ECMASCRIPT5 --js TSCompiler.js --js direct-run.js --js_output_file TSCompiler-Run.min.js
