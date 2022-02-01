# Sidebar Component

Sidebar is a responsive component that serve as navigation links for your application.

### Includes

-   Sidebar visual component
-   Links:
        - Home
        - Posts
-   Component test built on Cypress
-   Internal state management
-   Mobile / Desktop views
-   Styled Breakpoints ([Docs](https://www.npmjs.com/package/styled-breakpoints))

### Tags

hashtags sidebar, navbar, react

## Usage

```js
<Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        isAuthenticated && isValidated && !isLoading ? (
          <>
            <Sidebar />
            {children}
          </>
        ) : (
          renderRedirect(props)
        )
      }
    />
```

## Preview on desktop
![Preview](https://i.imgur.com/0vzuqc2.jpg)
## Preview on mobile
![Preview](https://i.imgur.com/5CRGqtr.jpg)
