#!/bin/sh

protected_branch="main"
force_push_allowed=false

echo "Checking if push to $protected_branch branch is allowed..."

# Check if -f flag is provided
for arg in "$@"; do
    if [ "$arg" = "-f" ]; then
        force_push_allowed=true
        break
    fi
done

while read local_ref local_sha remote_ref remote_sha
do
    if [ "$remote_ref" = "refs/heads/$protected_branch" ]; then
        if [ "$local_ref" != "$remote_ref" ] && [ "$force_push_allowed" = false ]; then
            echo "Push to $protected_branch branch is not allowed."
            echo "Use 'git push -f' to force push if necessary."
            exit 1
        fi
    fi
done

exit 0
