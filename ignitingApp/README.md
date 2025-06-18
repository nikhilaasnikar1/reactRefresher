# reactRefresher

Package.json is a configuration for npm it keeps a track of what versions of package are installed with karrat or tilda (^/~)

--npm init

---

bundler bunldes app or packages the app to ship to production ex: webpack/parcel

there are two type of dependecy in a project:
1=> Dev dependency --- it is required for developement
2=> normal dependency -- it is used in production also

---

"parcel": "^2.15.2" ---- karrot ^ it automatically update minor versions. it is safe
"parcel": "~2.15.2" ---- tilda ~ it automatically update major versions. it is not safe

---

package.lock.json keeps a track of exact version of all the packages
for integrity it maintains hash so whatever on local will be same on production.
classic joke it is working locally

---

transitive dependency ==> means when you install a package npm install webpack it will install
webpack plus weback also has dependecies which are insatlled along automatically called as
transitive dependency

---

if i have package.json and package.lock.json I can recreate all the required node modules that is why we push these file on git and not node modules

---

using React CDN is not a preferred way to import react in project because fetching from CDN is a costly operation it makes a network call instead to avoid react in node modules. also it better to have it inside package json maintain dependecies

---

#Parcel

- Dev build
- Local server
- HMR- Hot module replacement
- File watching algorithm -- writeen in C++
- Caching - Faster Builds
- Image Optimization
- Minification of our files for production
- Bundling
- Compress files
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers
- Diagnotics
- Error Handling
- HTTPs
- Tree Shanking - remove unsed code
- Different dev and prod builds

---

this package helps manage browser compatibility
"browserslist":[
"last 2 versions"
]
