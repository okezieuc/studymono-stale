module.exports = {
  future: {
    webpack5: true,
  },
	target: "serverless",
	images: {
		loader: 'cloudinary',
		path: 'https://res.cloudinary.com/okezieuc/image/upload/',
	}
}