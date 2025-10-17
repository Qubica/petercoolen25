#!/bin/bash

# Script to update all remaining components to use the new grid system

echo "Updating components to use new 16-column grid system..."

# Array of components that need updating
components=(
  "About"
  "CTA" 
  "FAQ"
  "HowWeWork"
  "SelectedWork"
  "TechStack"
  "Testimonials"
)

# Update each component
for component in "${components[@]}"; do
  echo "Updating $component component..."
  
  # Replace section__container with container and add grid
  if [ -f "src/components/$component/$component.tsx" ]; then
    # First backup the original
    cp "src/components/$component/$component.tsx" "src/components/$component/$component.tsx.backup"
    
    # Update the container structure
    sed -i.tmp 's/className={styles\.section__container}/className="container"/g' "src/components/$component/$component.tsx"
    
    # Clean up temp files
    rm -f "src/components/$component/$component.tsx.tmp"
    
    echo "Updated $component.tsx"
  else
    echo "Warning: $component.tsx not found"
  fi
done

echo "Components updated! Please review changes and update grid classes manually as needed."
echo "Don't forget to update the corresponding .module.scss files."