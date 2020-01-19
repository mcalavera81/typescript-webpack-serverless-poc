#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

yq 'walk( if type=="object" and .format=="date-time" then del(.format) else . end)' $DIR/T24-Customer-1.2.0-swagger.yaml -y >  $DIR/my-customer-swagger.yaml
