# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: http://3.22.208.237
2. SSH username: ```admin```
3. SSH password or key: ```csc648group_Key.pem``` found in credentials folder
    <br> If a ssh key is used please upload the key to the credentials folder.
    
    ### Instructions:
    1. Open an SSH client
    2. Locate your private key file. The key used to launch this instance is ```csc648group6_Key.pem```
    3. Run this command, if necessary, to ensure your key is not publicly viewable.
        ```bash
        chmod 400 csc648group6_Key.pem
        ```
    4. Connect to your instance using its IP or Public DNS:
    
          IP: ```3.22.208.237```
          
          DNS: ```ec2-3-22-208-237.us-east-2.compute.amazonaws.com```
          
    5. Example:
        ```bash
        ssh -i "csc648group6_Key.pem" admin@3.22.208.237
        ```
          
4. Database URL or IP and port used: http://3.22.208.237:3306
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
    
5. Database username: ```root```
6. Database password: ```group6```
7. Database name: ```groupDB```
8. Instructions on how to use the above information:

    ### Instructions:
    1. Follow above directions to ssh into the server
    2. Enter this command to start the shell:
        ```bash
        sudo mysql -u root -p
        ```
    3. When prompted, enter the password: ```group6```

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
