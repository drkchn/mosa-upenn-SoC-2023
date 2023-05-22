#!/bin/sh

protected_branch="main"
force_push_allowed=false

while read local_ref local_sha remote_ref remote_sha
do
    if [ "$remote_ref" = "refs/heads/$protected_branch" ]; then
        if [ "$local_ref" != "$remote_ref" ] && [ "$force_push_allowed" = false ]; then
            echo "Push to $protected_branch branch is not allowed."
            exit 1
        fi
    fi
done

exit 0
