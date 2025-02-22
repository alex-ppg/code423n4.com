const OrgsJson = `
type OrgsJson implements Node {
  name:           String
  link:           String
  image:          String
  description:    String
  contests:       [ ContestsJson ] @link(by: "id", from: "contests")
  findings:       [ FindingsJson ] @link(by: "id", from: "findings")
}`

export default OrgsJson;
