# Testing Guide - ERP Student System

## How to Check if Everything is Working

### Step 1: Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5173` (or another port if 5173 is busy).

### Step 2: Open in Browser

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Step 3: Test the Application

#### A. Login & Authentication
1. **Login Page**: You should see the login page
2. **Test Login**: Click on any role button (Admin, Franchise, Teacher, Student, Parent)
3. **Dashboard**: After login, you should be redirected to the dashboard

#### B. Test Role & Permission Management (Admin Only)
1. Navigate to: `http://localhost:5173/admin/roles`
   - Should see: Role List page with all roles
2. Click "Add New Role" button
   - Should see: Add Role form
3. Navigate to: `http://localhost:5173/admin/roles/permissions`
   - Should see: Permission List page
4. Navigate to: `http://localhost:5173/admin/roles/assign/1`
   - Should see: Assign Permission page

#### C. Test Franchise Management (Admin)
1. Navigate to: `http://localhost:5173/admin/franchise`
   - Should see: Franchise List with cards/grid
2. Click "Add Franchise" button
   - Should see: Multi-step form for adding franchise
3. Click on any franchise card to view details
   - Should see: View Franchise page with details

#### D. Test Franchise Wallet (Admin + Franchise)
1. Navigate to: `http://localhost:5173/admin/wallet`
   - Should see: Wallet Overview with balance
2. Click "Add Amount" button
   - Should see: Add Amount form
3. Navigate to: `http://localhost:5173/admin/wallet/transactions`
   - Should see: Transaction Record table

#### E. Test Course Management (Admin + Franchise)
1. Navigate to: `http://localhost:5173/admin/course/programs`
   - Should see: Program List
2. Navigate to: `http://localhost:5173/admin/course`
   - Should see: Course List
3. Navigate to: `http://localhost:5173/admin/course/subjects`
   - Should see: Subject List

### Step 4: Check Browser Console

1. Open Developer Tools (F12 or Right-click → Inspect)
2. Go to Console tab
3. Look for any red error messages
4. If you see errors, note them down

### Step 5: Check Network Tab

1. In Developer Tools, go to Network tab
2. Refresh the page
3. Check if all files are loading (status 200)
4. Look for any 404 errors

## Common Issues & Solutions

### Issue 1: Page Not Found (404)
- **Solution**: Check if the route is correctly defined in `App.tsx`
- **Check**: Make sure the import path is correct

### Issue 2: Component Not Rendering
- **Solution**: Check browser console for errors
- **Check**: Verify all imports are correct

### Issue 3: Styling Not Working
- **Solution**: Make sure Tailwind CSS is properly configured
- **Check**: Verify `index.css` includes Tailwind directives

### Issue 4: TypeScript Errors
- **Solution**: Run `npm run build` to see all TypeScript errors
- **Check**: Make sure all types are properly imported

## Quick Test Checklist

- [ ] Login page loads
- [ ] Can login with any role
- [ ] Dashboard shows after login
- [ ] Navigation menu works
- [ ] Role List page loads (`/admin/roles`)
- [ ] Franchise List page loads (`/admin/franchise`)
- [ ] Wallet Overview loads (`/admin/wallet`)
- [ ] Course List loads (`/admin/course`)
- [ ] No console errors
- [ ] All pages are responsive (try resizing browser)

## Testing Routes Directly

You can test routes directly by navigating to:
- `/admin/roles` - Role List
- `/admin/roles/add` - Add Role
- `/admin/franchise` - Franchise List
- `/admin/franchise/add` - Add Franchise
- `/admin/wallet` - Wallet Overview
- `/admin/course/programs` - Program List
- `/admin/course` - Course List

## Expected Behavior

✅ **Working Correctly If:**
- Pages load without errors
- Navigation works smoothly
- Forms can be filled (even if submit doesn't work yet - that's expected with mock data)
- No red errors in console
- UI looks good and responsive

❌ **Not Working If:**
- Blank white screen
- Red errors in console
- Routes return 404
- Components don't render

## Next Steps After Testing

1. If everything works: You can start connecting to a real backend API
2. If there are errors: Check the browser console and fix the issues
3. Replace mock data with real API calls when ready

