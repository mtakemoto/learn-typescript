## Useful tsconfig settings
[`noImplicityAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny)
In method definitions, require that parameters have type defs.  Otherwise, a vanilla js declaration is inferred to have the "any" type.

[`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks)
If null/undefined is a return type, an optional field in a type, or inferrable by TS, then a syntax error will be shown
See https://www.tsmean.com/articles/learn-typescript/strict-null-checks-best-practice/


