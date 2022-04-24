<?php

namespace App\Http\Controllers\Api;

use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status'=>200,
            'students'=> Student::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $student = new Student;
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');
        $student->save();

        return response()->json([
            'status'=>200,
            'message'=>'Student added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student, $id)
    {
        return response()->json([
            'status'=>200,
            'student'=> $student->find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Student $student, $id)
    {
        $studentToUpdate = $student->find($id);
        $studentToUpdate->name = $request->input('name');
        $studentToUpdate->course = $request->input('course');
        $studentToUpdate->email = $request->input('email');
        $studentToUpdate->phone = $request->input('phone');
        $studentToUpdate->save();
        return response()->json([
            'status'=>200,
            'message'=>'Student updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student, $id)
    {
        $studentToDelete = $student->find($id);
        $studentToDelete->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Student deleted successfully'
        ]);
    }
}
