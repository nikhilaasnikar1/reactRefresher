# reactRefresher

Babel is used to trnaspile JSX to react element object then converted into html

JSX ==> React.createElement ==> React Element- JS Object ==> HTMLElement(render)

---

explore attributes to different tags

---

Cross-Site-scripting- JSX santizes the data before executing

---

/\*

*Header
-Logo
-Nav Items
*Body

- Search
- Res container
  - Res Card - img - name of res, start rating, cuisine, deleviry time
    \*Footer
    -Copyright
    -Links
    -Address

\*/

---

## Shimmer UI - show a fake Ui when the data is loading

---

> callback function
> destructuring
> Spread operator
> useEffect
> Fetch/ Axios

===========

react diff algorithm and reconcilation example useState for login/logout-- SetLogin(!login)

=====================

> Whenever a state variable updates, react triggers a reconciliation cycle(re-renders the component)
> --React re-renders the whole component but only updates the changed value because DOM manipulation is expensive.

> Read about data binding in React
> Read about React fiber

==================
useEffect
-- if no dependency array => useEffect is called on every render
-- if dependecy array is empty [] => useEffect is only called in initial render(just once)
-- if dependency array has some value =>useEffect called everytime value changes

=========

rafce -- shortcut to create a component

==========

<Link>  react router dom
