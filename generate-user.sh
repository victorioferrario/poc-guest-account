USERNAME=$1

if [ -z "$USERNAME" ]; then
    echo "Username not defined"

    exit 1
fi

FOLDER=auth
FILE="${FOLDER}/htpasswd"

if [ ! -f $FILE ]; then
    mkdir $FOLDER
    touch $FILE
fi

htpasswd -B auth/htpasswd $USERNAME
