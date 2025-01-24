# React Router Dom v6 - Route Matching Issue with Special Characters in Dynamic Segments

This repository demonstrates a bug in React Router Dom v6 where routes with special characters (specifically the '+' symbol) in dynamic segments fail to match correctly.  The bug occurs because the router's matching algorithm interprets the special character literally, preventing the route from resolving.

## Bug Description

When navigating to a route with a dynamic segment containing a special character like '+', the route fails to match, resulting in a routing error or unexpected rendering.

## Solution

The solution involves using a regular expression in the route definition to allow the dynamic segment to match special characters.  This ensures that the route correctly recognizes the dynamic part of the URL, even if it contains special characters.

## How to reproduce the bug

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe that navigating to a route with a '+' in the dynamic segment will result in an incorrect route match.

## How to fix the bug

1. Update the route definition to use a regular expression that matches the desired input.
2. Test the updated route by navigating to various routes with special characters in the dynamic segments. 