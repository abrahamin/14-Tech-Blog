const router = require("express").Router();
const { Blog, Comment, User } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // serialize data for template
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // pass serialized data for template
    res.render("allBlogs", { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
