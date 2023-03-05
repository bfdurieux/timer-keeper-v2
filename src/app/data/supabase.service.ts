import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { Injectable } from '@angular/core';
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase: SupabaseClient;
  constructor() {
    this.supabase = this.connectToSupabase();
  }

  connectToSupabase() {
    const supabaseUrl: string = environment.apiURL;
    const supabaseKey:string = environment.apiKey;
    return createClient(supabaseUrl, supabaseKey);
  }
}
