# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Created Rent Assurance claim form with multiple sections
  - Insured Details section
  - Claim Information section
  - Beneficiary Details section
  - Declaration section
  - Review section
- Added file upload component with drag-and-drop support and validation
- Added stepper navigation between form sections
- Added summary dialog for final review
- Created Money Insurance claim form structure
  - Insured Details section
    - Policy information
    - Company details
    - Alert preferences
  - Details of Loss section
    - Incident datetime and location
    - Transit Loss Details (dynamic)
      - Multiple discoverer entries (name, position, salary)
      - Police escort information
      - Employee integrity check
    - Safe Loss Details (dynamic)
      - Multiple discoverer entries
      - Safe installation details
      - Multiple key holders (name, position, salary/remuneration)
    - Loss Amount Details
      - Amount field
      - Loss description field
    - Police Notification
    - Previous Loss History
  - Review section
    - Data privacy notice
    - Declarations and agreements
    - Digital signature and date
    - Terms and conditions acceptance
- Created Public Liability Insurance claim form
  - Insured Details section
    - Policy information
    - Company details
    - Contact information
    - Alert preferences
  - Details of Loss section
    - Accident datetime and location
    - Accident details
    - Dynamic witnesses section
      - Name, address, and employment status
      - Employee/Independent indicator
    - Work and responsibility details
    - Police notification details
    - Other policies information
    - Claimant details
    - Claim notice and document upload
  - Review section
    - Data privacy notice
    - Declarations and agreements
    - Digital signature and date
    - Terms and conditions acceptance
- Created Goods in Transit claim form structure
  - Insured Details section
    - Policy information
    - Company details
    - Contact information
    - Business type
    - Alert preferences
  - Details of Loss section
    - Loss datetime and location
    - Goods details (packages, weight, value)
    - Vehicle involvement with conditional fields
    - Dynamic witnesses section
    - Police notification details
    - Dispatch information
    - Dynamic goods entries with file uploads
      - Quantity, description, and value fields
      - Invoice, delivery note, receipt, and correspondence file uploads
    - Claim type selection (owner/carrier) with conditional sections
    - Additional details about goods condition and handling
  - Review section
    - Data privacy notice
    - Declarations and agreements
    - Digital signature and date
    - Terms and conditions acceptance

### Changed
- Moved file uploads (rent agreement, demand note, quit notice) from Claim Information to Declaration section
- Added policy number field to Claim Information section
- Updated Declaration page styling to flow text and inputs in a single paragraph
- Fixed file upload component TypeScript errors
  - Added type assertion for File instance check
- Updated Review page to match structure of fidelity and motor claims
  - Added data privacy notice
  - Added declaration text
  - Added terms and conditions checkbox
- Updated Money Insurance Details of Loss page styling
  - Unified styling for dynamic sections (discoverers and key holders)
  - Added consistent icons (AddCircleRounded and RemoveCircleOutlineRounded)
  - Improved layout with chips and grid system
  - Enhanced visual hierarchy with secondary colors
- Restructured Money Insurance form
  - Moved declaration content to review section
  - Removed declaration step for better user flow
  - Updated navigation and stepper accordingly

### Fixed
- TypeScript errors in file upload component
- Schema validation for policy number field
- Review page white screen issue
- Declaration text formatting and styling

## Motor Claim Form Structure

### Form Sections
1. Personal Info
   - Policy details (number, cover period)
   - Insured details (name, DOB, contact)
   - Alert preferences

2. Vehicle Details
   - Registration and ownership info
   - Vehicle specifications
   - Hire purchase details
   - Vehicle inspection details

3. Incident Details
   - Location and datetime
   - Incident description
   - Damage assessment

4. Witnesses
   - Witness details (name, contact, address)
   - Passenger information
   - Multiple witness support

5. Other Drivers
   - Other vehicles involved
   - Driver details
   - Vehicle information
   - Injury/damage description

6. Review
   - Terms and conditions
   - Data privacy notice
   - Final submission

### Key Features
- Multi-step form with stepper navigation
- Conditional form fields based on user responses
- Form validation using Zod schemas
- State management using Zustand stores
- Summary dialog showing all sections
- Form data persistence
- API integration for form submission

### Technical Implementation
- Each section has its own:
  - Page component
  - Schema definition
  - State management
  - Form validation
  - Navigation logic
- Wrapper components for:
  - Stepper navigation
  - Summary dialog
  - Form submission
- Shared components:
  - Form fields (TextField, DatePicker, etc.)
  - Error handling
  - Loading states

### Implementation Details
- Dynamic form fields using array fields (like motor witnesses)
- Conditional rendering based on loss type (transit/safe)
- Multiple entry support for:
  - Transit loss discoverers
  - Safe loss discoverers
  - Key holders
- Yes/No questions with conditional explanations
- Form validation using Zod
- State management using Zustand 

## KYC Forms Implementation Rules

### Structure and Location
- All KYC forms must be placed in the `/features/multistep-forms/forms/kyc` directory
- Follow the exact structure and styling of motor claims forms as template
- Do not create a new kyc directory, use existing one in multistep-forms

### Form Components and Styling
- DO NOT use the HTML/JSX structure from provided samples
- Only extract the following from provided samples:
  - Label names/text
  - Field types (map to existing controller components)
  - Required field status (marked by `<span className='required'>*</span>` in samples)
- Use existing controller components from motor claims
- Follow exact styling patterns from motor claims forms

### Special Components Requirements
1. Location Fields (Country/State/City):
   - Create reusable component for all KYC forms
   - Implement autocomplete functionality
   - Allow manual entry if location not in database
   - Progressive disclosure: State field appears after country selection, City after state
   
2. Phone Number Fields:
   - Create custom component based on TextField template
   - Include country code selection
   - Update number format based on selected country
   
3. "Other" Option in Menus:
   - When "Other" is selected, render new text input field
   - Maintain consistent styling with other fields

### Data Management
- Create comprehensive location database with:
  - Countries
  - States/Provinces
  - Cities
- Store in appropriate format for autocomplete functionality
- Allow fallback for missing locations

### Validation
- Required fields must be marked with asterisk (*)
- Implement proper validation schemas
- Use consistent error message styling
- Follow motor claims validation patterns

### Component Reusability
- Location and phone components should be reusable across all KYC forms
- Maintain consistent props interface
- Document component usage

### Updates and Maintenance
- Document any new reusable components
- Update this changelog when new patterns are established
- Maintain consistency across all KYC forms 