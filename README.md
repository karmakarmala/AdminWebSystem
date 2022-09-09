
# AdminWebSytem :

## Non-Functional:

**Web application segregated into the following layers:**
- Web frontend/website
- Rest APIs
- Data/Persistence layer

## User Story (Functional):

Organization needs to build an admin web app which connects to a persistence layer via restful APIs.
The persistence layer needs to store promotional documents (products & accessories) for different keywords. 
For this task, assume that a finite list of promotional documents is already available and the admin is not required to add/update/delete the promotional documents.
There may be more than one document associated with a keyword.

**Admin should be able to**

1.	Add a new “keyword” --> “Promoted documents” mapping,
2.	Update/Edit & Delete the mappings as required,
3.	View the mappings by searching for a keyword.


**Acceptance Criteria:**

- When Add a new keyword  --> promoted documents mapping , then it is saved in the database

- When Delete a keyword --> promoted documents mapping ,then the mapping is deleted forever from the database

- When Update a keyword --> promoted documents mapping, then the mapping is updated with the new mapping

- When Search for a keyword , then only the matching result is displayed with all the mappings available.

## Demo

**Below is the screen snippet of the applicationn**

![alt text](https://github.com/karmakarmala/AdminWebSystem/blob/master/Demo/DemoAdminWebSystem.gif "Application Demo")
