// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint assertions-min-length-array-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:22:9 at #/paths/~1pet~1findByStatus/get/tags

Operation tags should have minimum 4 items

20 | summary: summary example
21 | tags:
22 |   - foo
   |   ^^^^^
23 |   - baz
   |   ^^^^^
24 |   - bar
   |   ^^^^^
25 | responses:
   | ^
26 |   '200':
27 |     description: example description

Error was generated by the tags-min-length assertion rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;
