function createProjectElement(id, project) {
    /* Create an element in Project
    tag: some tags
    title: title of the project or publications
    paper_url: link to the paper
    authors: authors
    conference: publication venue
    image (optional): directory to project image
    code (optional): link to the code
    zhihu (optional): link to the zhihu
    blog (optional): link to the blog
    demo (optional): link to the demo
    others (optional): anything else
    */
    if (project.tag == null)
        project.tag = id;
    if (project.others == null)
        project.others = "";

    var html_img = `<img src='${project.image}' style="max-width: 180px"></div></div>`;
    var codeLink = project.code ? `<a href="${project.code}">[code]</a>` : "";
    var zhihu = project.zhihu ? `<a href="${project.zhihu}">[知乎]</a>` : "";
    var demo = project.demo ? `<a href="${project.demo}">[demo]</a>` : "";
    var blog = project.blog ? `<a href="${project.blog}">[blog]</a>` : "";

    var html_txt = `<p>
      <a href="${project.paper_url}"><papertitle>${project.title}</papertitle></a>
      <br>
      ${project.authors}
      <br>
      <em>${project.conference}</em> &nbsp; ${codeLink ? codeLink + "&nbsp;" : ""} ${zhihu ? zhihu + "&nbsp;" : ""} ${demo ? demo + "&nbsp;" : ""} ${blog ? blog : ""}
      <br>
      ${project.others}`

    document.getElementById(id + "-img").innerHTML = html_img;
    document.getElementById(id + "-txt").innerHTML = html_txt;
}
