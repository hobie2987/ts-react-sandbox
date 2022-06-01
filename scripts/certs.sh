KEY=server.key
CRT=server.crt

if command -v openssl > /dev/null
then
    if [ ! -e $KEY ] || [ ! -e $CRT ]
    then
      openssl req -new -x509 -nodes -days 365 -keyout $KEY -out $CRT -subj "//O=/C=US/CN=localhost"
    else
      echo Certs exist... Skipping cert generation
    fi
else
  echo unknown command: openssl
fi