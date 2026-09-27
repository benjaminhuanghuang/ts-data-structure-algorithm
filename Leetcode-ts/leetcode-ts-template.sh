# Create a file named leetcode
#!/bin/bash

# Prompt the user for the file name
read -p "Enter the problem title: " problem_title

# Extract the problem number
number=$(echo "$problem_title" | cut -d '.' -f 1)

# Remove the problem number from the input string
title=$(echo "$problem_title" | cut -d '.' -f 2-)

# Convert the title to lowercase and replace spaces and special characters with hyphens
converted_title=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//;s/-$//')

filename="leetcode_${number}_${converted_title}.ts"

# Check if the file already exists
if [ -e "$filename" ]; then
  echo "File $filename already exists."
  exit 1
fi

# Create the file
touch "$filename"

echo "/*" >> "$filename"
echo "$problem_title" >> "$filename"
echo "\n" >> "$filename"
echo "*/" >> "$filename"
# Confirm that the file was created
# if [ -e "$filename" ]; then
#   echo "File $filename created successfully."
# else
#   echo "Failed to create file $filename."
#   exit 1
# fi