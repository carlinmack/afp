### Functional Requirements (what)
**Authentication**
1. As a user I want to be able to create an account using an email and password
2. As a user I want to be able to log in and log out
3. As a user I want to be able to opt in to persist being logged in
4. As a user I want to be able to reset my password
**Authorisation**
2. As an administrator, I want my user account to be able to be given rights by a web-master
4. As a maintainer I want to be able to claim an entry that I have submitted previously, using the email that was provided with the entry
5. As a maintainer I want to be able to submit a request to claim an article which I do not have access to the email that was provided for the entry
**Entry maintenance**
6. As a maintainer I want to update the description and title of my entry
7. ? As a maintainer I want to see the changes that have been made to my entry metadata
8. ? As a maintainer I want to be able to submit a new version of my entry
9. ? As a maintainer I want to see the changes that have been made to my entry
10. As a maintainer I want to be able to unsubscribe from email notifications if there is another maintainer on the entry.
11. As a maintainer I want to access the statistics for an entry.
12. As a maintainer I want to see my overall statistics for my entries
**User Account Maintenance**
13. As a user I want to be able to change my log-in email address
14. As a user I want to be able to change my contact email address
16. As a user I want to be able to change my password
**Commenting**
17. As a user of the system, I want to be able to comment on an entry using Markdown syntax
18. As a user of the system, I want to be able to delete a comment
**Submission**
19. ? As a user I want to submit an article so that I can make my own Isabelle developments available to others
20. As a maintainer I want to update/change my article(s) so that I can maintain my article against the latest development version of Isabelle
21. As an administrator I want to access articles which have been changed/updated by maintainers so that I can referee the changes/updates before committing them to the archive

### Non-functional Requirements (how)
**Security**
1. Log in email addresses should be validated
2. Users should be able to enable two-factor authentication
3. Passwords should be stored in a cryptographically secure way
**Performance**
4. The rebuilding of the AFP should be kept to a minimum
**UX**
5. Error cases should be defined for all API calls
Scalability - The growth highlighted in section 2.2 motivates the need for a new implementation that is scalable.
Accessibility, Capacity, current and forecast, Compliance, Documentation, Disaster recovery, Efficiency, Effectiveness, Extensibility, Fault tolerance, Interoperability, Maintainability, Privacy, Portability, Quality, Reliability, Resilience, Response time, Robustness, Scalability, Security, Stability, Supportability, Testability
