import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectData from "../content/projects.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row" style={{ textAlign: "center" }}>
      <div className="col col-12">
        <h3>Kacha Mukabe</h3>
        <p>
          <span className="badge secondary">Developer</span>{" "}
          <span className="badge secondary">React</span>{" "}
          <span className="badge secondary">Python</span>
        </p>
      </div>
    </div>
    <div
      className="row"
      style={{
        borderTop: `1px solid #eee`,
        marginBottom: `0`,
      }}
    >
      <div className="col col-12">
        <h4>Things I have built</h4>
        <ul>
          {ProjectData.projects.map((data, index) => (
            <p className="" key={`content_item_${index}`}>
              <a
                // className="paper-btn"
                style={{ backgroundImage: `none` }}
                href={data.url}
              >
                <span className="badge secondary">{data.title}:</span>{" "}
                <span className="text-muted">{data.description}</span>
              </a>
            </p>
          ))}
        </ul>
      </div>
    </div>

  </Layout>
)

export default IndexPage
