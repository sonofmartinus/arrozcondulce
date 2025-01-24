module.exports = {
	branches: ["main"],
	plugins: [
	  "@semantic-release/commit-analyzer", // Determines the type of version bump (major, minor, patch)
	  "@semantic-release/release-notes-generator", // Generates release notes
	  "@semantic-release/changelog", // Updates the CHANGELOG.md
	  [
		"@semantic-release/npm",
		{
		  npmPublish: false, // Prevents publishing to npm, only updates package.json and package-lock.json
		},
	  ],
	  [
		"@semantic-release/github",
		{
		  assets: ["CHANGELOG.md"], // Upload changelog to GitHub release
		},
	  ],
	  [
		"@semantic-release/git",
		{
		  assets: ["package.json", "package-lock.json"], // Commit updated package.json and lockfile
		  message: "chore(release): bump version to ${nextRelease.version} [skip ci]",
		},
	  ],
	],
  };
