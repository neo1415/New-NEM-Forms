heavy showcase.
dictionary

link in description

this project follows a maintable enterprise solution and some things might be overkill for majority of projects. just keep things simple

this project is heavily relied on react hook form and zod
also zustand, mui plays an essential role here

the folder structure is a common react folder structure where make develop is in featrues folder and modules and related features are close to each other and shared modules are outside of the features as common and shared modules.
setup is with react router.

currenty common shared things are simple
a link to enhance the mui button and mix it with react router navigation
a utils folder with simple function utils
main where all things are wrapped in correspoinsid providers
a simple routing solution with react router, which there is a main dashbaord layout that wraps anything and with our main focus here "the emploees feature" here
open features, we have other features like confirm where you can use it to easily open confirm dialogs anywhere

the form feature which contains all functionalities related to form and also enhancing the rhf capabilities
layout feature containing layout for dashboard and wrapping everything in this outlet

explain components, very easy to use and maintain with enhancing capabilities of each component by using power of typescript, react context, rhf to create be controllers
not needing to pass many props ,only necessary,
errors are handled by the power of rhf context
explain textfield eg
explaing form
error summary

now lets get to the main part, the employee feature
although the goal is to create a employee form but by splitting the employee feature also into more splitted features and structure it, we can maintain these types of forms much easier because if we dont separate it, it becomes really hard to understand and maintain
for each step i decided to use a feature
for example for personal info, we have these and this pattern will be duplicated for other sub features
and also all sub features are gathered in wrapper sub feature

lets start
the wrapper sub module is respnosible to gather all other sub features (wizard steps)
stepper is doing alot, it revalidates on store changes, doing navigation and creates a very amazing ux
the summary dialog is the last confirm dialog that opens at the end so user can view all of his submits and confirm and create

the usemutation is here to submit data to server but you can use other solutions if you want but highly recommneded
useStore is simple
the schema is gathering and merging all other form schemas together and checks all things for the last time then decide wether for is validated to submit or not

explain personal info step

all things you here mostly they are similar in other sub features
explain other files than page.tsx
why to use provider and Page
explain every thing here
